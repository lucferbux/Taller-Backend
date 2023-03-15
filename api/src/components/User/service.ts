import IUserModel from './model';
import { IUserService } from './interface';
import { MockLogin } from '../Auth/mock';

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
  /**
   * @returns {Promise < IUserModel[] >}
   * @memberof UserService
   */
  async findAll(): Promise<IUserModel[]> {
    try {
      return [MockLogin];
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IUserModel >}
   * @memberof UserService
   */
  async findOne(id: string): Promise<IUserModel> {
    try {
      console.log(id);
      return MockLogin;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {IUserModel} user
   * @returns {Promise < IUserModel >}
   * @memberof UserService
   */
  async insert(body: IUserModel): Promise<IUserModel> {
    try {
      console.log(body);
      return MockLogin;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * @param {string} id
   * @returns {Promise < IUserModel >}
   * @memberof UserService
   */
  async remove(id: string): Promise<IUserModel> {
    try {
      console.log(id);
      return MockLogin;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default UserService;
