export interface IProjectsRequest {
  id: string;
  title: string;
}
export interface IProjectsModel {
  id: string;
  title: string;
  description: string;
  version: string;
  link: string;
  tag: string;
  timestamp: number;
}

export default IProjectsModel;
