var express = require('express');
var router = express.Router();
const {createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser}=require ("./users");
/* GET home page. */
router.put('/update/user/:userId', updateUser);
router.get('/get/user', getUsers);
router.post('/create/user', createUser);
router.delete('/delete/user/:userId',deleteUser);
router.get('/signin/:userId/:userpass',getUserDetails)
module.exports = router;