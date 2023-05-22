import IUserModel from '@/components/User/model';
import { IAuthService } from './interface';
import { MockLogin } from './mock';

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {
  /**
   * @param {IUserModel} body
   * @returns {Promise <IUserModel>}
   * @memberof AuthService
   */
  async createUser(body: IUserModel): Promise<IUserModel> {
    try {
      // TODO: user creation
      console.log(body);
      const user = MockLogin;
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  /**
   * @param {IUserModel} body
   * @returns {Promise <IUserModel>}
   * @memberof AuthService
   */
  async getUser(body: IUserModel): Promise<IUserModel> {
    try {
      // TODO: check user and password
      console.log(body);
      const user = MockLogin;
      if (body.email === user.email && body.password === user.password) {
        return user;
      } else {
        throw new Error('user invalid');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default AuthService;
