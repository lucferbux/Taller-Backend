import { Router } from "express";
// import * as jwtConfig from '@/config/middleware/jwtAuth';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', (req, res) => {
    res.send('Components')
})


/**
 * @export {express.Router}
 */
export default router;