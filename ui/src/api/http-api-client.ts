import ApiClient, {
  ApiError,
  BadRequest,
  Forbidden,
  GenericError,
  NotFound,
  DashboardInfo,
  PreconditionFailed,
  PreconditionRequired,
  ProjectResponse,
  TokenResponse,
  Unauthorized,
  UnprocessableEntity
} from './api-client';

import { getAccessToken, removeAuthToken } from '../utils/auth';
import { Project } from '../model/project';
import { AboutMe } from '../model/aboutme';

async function createApiError(response: Response | XMLHttpRequest): Promise<ApiError> {
  switch (response.status) {
    case 400:
      return new BadRequest();
    case 401:
      return new Unauthorized();
    case 403:
      return new Forbidden();
    case 404:
      return new NotFound();
    case 412:
      return new PreconditionFailed();
    case 415:
    case 422:
      try {
        const detail = 'json' in response ? (await response.json()).detail : response.responseText;
        return new UnprocessableEntity(detail);
      } catch (e) {
        return new UnprocessableEntity();
      }
    case 428:
      return new PreconditionRequired();
  }
  return new GenericError(
    response.status,
    'text' in response ? await response.text() : response.responseText
  );
}

const handleResponse = async <T>(func: () => Promise<T>): Promise<T> => {
  try {
    return await func();
  } catch (e) {
    if (e instanceof Unauthorized) {
      removeAuthToken();
      window.location.replace('/');
    }
    throw e;
  }
};

// TODO: Uncomment to use it with auth
const getAuthorizationHeader = () => {
  const accessToken = getAccessToken();
  if (accessToken) {
    return 'Bearer ' + accessToken;
  } else {
    throw Object.assign(new Error('Unauthorized'), { code: 402 });
  }
};

export default class HttpApiClient implements ApiClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async token(email: string, password: string): Promise<TokenResponse> {
    const body = new URLSearchParams({
      email: email,
      password: password
    });
    const response = await fetch(this.baseUrl + '/auth/login', {
      method: 'POST',
      body: body
    });
    if (!response.ok) {
      throw await createApiError(response);
    }
    return response.json();
  }

  getAboutMe = (): Promise<AboutMe> =>
    handleResponse(async () => {
      const response = await fetch(this.baseUrl + `/v1/aboutme/`, {
        method: 'GET',
        headers: {
          //Authorization: getAuthorizationHeader()
        }
      });
      if (!response.ok) {
        throw await createApiError(response);
      }
      return response.json();
    });

  getProjects = (): Promise<Project[]> =>
    handleResponse(async () => {
      const response = await fetch(this.baseUrl + `/v1/projects/`, {
        method: 'GET',
        headers: {
          //Authorization: getAuthorizationHeader()
        }
      });
      if (!response.ok) {
        throw await createApiError(response);
      }
      return response.json();
    });

  getDashboardInfo = (): Promise<DashboardInfo> => {
    return Promise.all([this.getAboutMe(), this.getProjects()]).then(([aboutMe, projects]) => {
      return {
        aboutMe,
        projects
      };
    });
  };

  postProject = async (project: Project): Promise<ProjectResponse> => {
    const response = await fetch(this.baseUrl + '/v1/projects', {
      method: 'POST',
      headers: {
        Authorization: getAuthorizationHeader(),
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    });
    if (!response.ok) {
      throw await createApiError(response);
    }
    return response.json();
  };
}
