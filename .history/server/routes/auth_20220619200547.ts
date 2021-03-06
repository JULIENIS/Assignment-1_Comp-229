import express from 'express';
const router = express.Router();


import { DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage } from '../controllers/auth';


/* Display Login page. */
router.get('/login', DisplayLoginPage);


/* Display Register page. */
router.get('/register', DisplayRegisterPage);




/* Process Login page. */
router.post('/login', ProcessLoginPage);


/* Process Register page. */
router.post('/register', ProcessRegisterPage);




/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);


export default router;