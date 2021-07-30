const modeltest = require('../models/testModel');

const testCtrl = {};

testCtrl.getEmployees = async(req,res) => {
    const test = await modeltest.find();
    res.json(test); 
};

testCtrl.createEmployee = (req,res)=>{
    const test = new test(req.body);
    await test.save();
    res.json({"status":"saved "});
};

testCtrl.getEmployee = async(req,res)=>{
    console.log(req.params);
    const emplogyee = await modeltest.findById(req.params.id);
    res.json(emplogyee);
};

testCtrl.editEmployee = async (req,res)=>{

    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await modeltest.findByIdAndUpdate(req.params.id, 
    {$set: employee},{new:true});
    res.json({status: 'employee updated'});
};

testCtrl.deleteEmployee = async(req,res)=>{
    await modeltest.findByIdAndRemove(req.params.id);
    res.json({status: 'employee deleted'})
} 

module.exports = testCtrl;