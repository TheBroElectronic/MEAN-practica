const express = require('express');
const router = express.Router();
const testCtrl = require('../controllers/testController')

router.get('/', testCtrl.getEmployees);
router.post('/', testCtrl.createEmployee);
router.get('/:id', testCtrl.getEmployee);
router.put('/:id', testCtrl.editEmployee);
router.delete('/:id', testCtrl.deleteEmployee);
    
module.exports = router;