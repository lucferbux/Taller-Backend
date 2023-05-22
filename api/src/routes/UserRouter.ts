import { Router } from "express";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', (req, res) => {
    res.send('User')
})


/**
 * @export {express.Router}
 */
export default router;