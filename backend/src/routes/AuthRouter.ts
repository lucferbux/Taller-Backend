import { AuthComponent } from '@/components';
import { Router } from 'express';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.post('/login', AuthComponent.login);

/**
 * @export {express.Router}
 */
export default router;
