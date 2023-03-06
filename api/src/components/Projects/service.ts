import IProjectsModel from "./model";
import { IProjectsService } from "./interface";
import { MockProjects } from "./mock";

/**
 * @export
 * @implements {IProjectsModelService}
 */
const ProjectsService: IProjectsService = {
  /**
   * @returns {Promise < IProjectsModel[] >}
   * @memberof ProjectsService
   */
  async findAll(): Promise<IProjectsModel[]> {
    try {
      return MockProjects;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IProjectsModel >}
   * @memberof ProjectsService
   */
  async findOne(id: string): Promise<IProjectsModel> {
    try {
      return MockProjects.find((element) => element.id === id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IProjectsModel} user
   * @returns {Promise < IProjectsModel >}
   * @memberof ProjectsService
   */
  async insert(body: IProjectsModel): Promise<IProjectsModel> {
    try {
      // TODO: Log the project to be created
      console.log(body);

      return MockProjects[0];
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IProjectsModel >}
   * @memberof ProjectsService
   */
  async remove(id: string): Promise<IProjectsModel> {
    try {
      console.log(id);
      return MockProjects[0];
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default ProjectsService;
