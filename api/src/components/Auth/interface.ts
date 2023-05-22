import { IUserModel } from '@/components/User/model';
import { DocumentDefinition } from 'mongoose';

/**
 * @export
 * @interaface IAuthService
 */
export interface IAuthService {
  /**
   * @param {IUserModel} IUserModel
   * @returns {Promise<IUserModel>}
   * @memberof AuthService
   */
  createUser(IUserModel: DocumentDefinition<IUserModel>): Promise<IUserModel>;
  /**
   * @param {IUserModel} IUserModel
   * @returns {Promise<IUserModel>}
   * @memberof AuthService
   */
  getUser(IUserModel: IUserModel): Promise<IUserModel>;
}
