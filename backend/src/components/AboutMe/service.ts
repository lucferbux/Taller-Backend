import { IAboutMeModel } from './model';
import { IAboutMeService } from './interface';
import { MockAboutMe } from './mock';

/**
 * @export
 * @implements {IAboutMeModelService}
 */
const AboutMeService: IAboutMeService = {
    /**
     * @returns {Promise < IAboutMeModel >}
     * @memberof AboutMeService
     */
    async findAll(): Promise<IAboutMeModel> {
        try {
            const result = MockAboutMe;
            if(result.length > 0){
                return result[0];
            } else {
                throw new Error("empty search");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAboutMeModel >}
     * @memberof AboutMeService
     */
    async findOne(id: string): Promise<IAboutMeModel> {
        try {
            try {
                const result = MockAboutMe;
                if(result.length > 0){
                    return result[0];
                } else {
                    throw new Error("empty search");
                }
            } catch (error) {
                throw new Error(error.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IAboutMeModel} user
     * @returns {Promise < IAboutMeModel >}
     * @memberof AboutMeService
     */
    async insert(body: IAboutMeModel): Promise<IAboutMeModel> {
        return undefined;
    },

    /**
     * @param {string} id
     * @returns {Promise < IAboutMeModel >}
     * @memberof AboutMeService
     */
    async remove(id: string): Promise<IAboutMeModel> {
        return undefined;
    },
};

export default AboutMeService;
