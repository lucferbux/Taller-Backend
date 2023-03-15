import { AboutMe } from '../model/aboutme';
import { Project } from '../model/project';

export interface ApiError {
  description?: string;
}

export class BadRequest implements ApiError {}

export class GenericError implements ApiError {
  constructor(httpCode: number, description: string) {
    this.httpCode = httpCode;
    this.description = description;
  }

  httpCode: number;

  description: string;
}

export class Timeout implements ApiError {}
export class Forbidden implements ApiError {}
export class Unauthorized implements ApiError {}
export class NotFound implements ApiError {}
export class UnprocessableEntity implements ApiError {
  constructor(public description?: string) {}
}
export class PreconditionFailed implements ApiError {}
export class PreconditionRequired implements ApiError {}

export interface TokenResponse {
  token: string;
}

export interface ProjectResponse {
  message: string;
}

export default interface ApiClient {
  token(email: string, password: string): Promise<TokenResponse>;
  getAboutMe(): Promise<AboutMe>;
  getProjects(): Promise<Project[]>;
  // TODO: Create POST for project
}
