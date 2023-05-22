import { Router } from "express";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', (req, res) => {
    res.send('About Me')
})

/**
 * @export {express.Router}
 */
export default router;