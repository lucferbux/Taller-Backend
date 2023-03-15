import { IAboutMeModel } from './model';

/**
 * @export
 * @interface IAboutMeService
 */
export interface IAboutMeService {
  /**
   * @returns {Promise<IAboutMeModel>}
   * @memberof IAboutMeService
   */
  findAll(): Promise<IAboutMeModel>;

  /**
   * @param {string} code
   * @returns {Promise<IAboutMeModel>}
   * @memberof IAboutMeService
   */
  findOne(code: string): Promise<IAboutMeModel>;

  /**
   * @param {IAboutMeModel} IAboutMeModel
   * @returns {Promise<IAboutMeModel>}
   * @memberof IAboutMeService
   */
  insert(IAboutMeModel: IAboutMeModel): Promise<IAboutMeModel>;

  /**
   * @param {string} id
   * @returns {Promise<IAboutMeModel>}
   * @memberof IAboutMeService
   */
  remove(id: string): Promise<IAboutMeModel>;
}
