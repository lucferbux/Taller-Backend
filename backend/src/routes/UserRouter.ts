import { Router } from 'express';
import { UserComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', UserComponent.findAll);

router.get('/:id', UserComponent.findOne);


/**
 * @export {express.Router}
 */
export default router;
