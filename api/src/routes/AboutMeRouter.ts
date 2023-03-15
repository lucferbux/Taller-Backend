import { Router } from 'express';
import { AboutMeComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', AboutMeComponent.findAll);

/**
 * @export {express.Router}
 */
export default router;
