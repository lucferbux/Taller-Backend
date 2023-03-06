import { Router } from "express";
import { ProjectsComponent } from "@/components";
// import * as jwtConfig from '@/config/middleware/jwtAuth';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get("/", ProjectsComponent.findAll);

// TODO: Create a POST route (note, use a midelware with jwtConfig) ->  functiontocreate(path, middlewarejswt, actiontoperform)

/**
 * @export {express.Router}
 */
export default router;
