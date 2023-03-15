import { IProjectsModel } from './model';

/**
 * @export
 * @interface IProjectsService
 */
export interface IProjectsService {
  /**
   * @returns {Promise<IProjectsModel[]>}
   * @memberof IProjectsService
   */
  findAll(): Promise<IProjectsModel[]>;

  /**
   * @param {string} code
   * @returns {Promise<IProjectsModel>}
   * @memberof IProjectsService
   */
  findOne(code: string): Promise<IProjectsModel>;

  /**
   * @param {IProjectsModel} IProjectsModel
   * @returns {Promise<IProjectsModel>}
   * @memberof IProjectsService
   */
  insert(IProjectsModel: IProjectsModel): Promise<IProjectsModel>;

  /**
   * @param {string} id
   * @returns {Promise<IProjectsModel>}
   * @memberof IProjectsService
   */
  remove(id: string): Promise<IProjectsModel>;
}
