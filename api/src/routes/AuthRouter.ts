import { Router } from "express";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/login', (req, res) => {
    res.send('Login')
})


/**
 * @export {express.Router}
 */
export default router;