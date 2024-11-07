import { createDummy } from 'controllers/dummy';
import { Router } from 'express';
import { roleAuth, powerUserAuth } from 'middleware/authHandlers';
import { PowerUserRole } from 'types';

const router = Router();
// add role auth like so:  router.use('/dummy', powerUserAuth, roleAuth([PowerUserRole.ADMIN, PowerUserRole.SUPER_ADMIN]), createDummy);
router.use('/dummy', createDummy);
export default router;
