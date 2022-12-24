const Student=require('../model/studentModel');

exports.getstudet=async(req,res)=>
{
    try {
        const getstudent=await Student.find().populate('club');
        res.status(200).json({
            success:true,
            data:getstudent
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}




exports.getOnestudet=async(req,res)=>
{
    try {
        const{id}=req.params
        const getOnestudent=await Student.findOne({id});
        res.status(200).json({
            success:true,
            data:getOnestudent
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

exports.createStudent=async(req,res)=>
{
    try {
        const{name,id,division,club}=req.body

    const findStudent=await Student.find({$or:[{id:id},{name:name}]});
    if(!findStudent)
    {   
        const err=new Error('Student is already exist');
        err.statusCode=500
        throw err

    }
    const studentData={
        name,id,division,club
    }
    const createStudent=await Student.create(studentData);

    res.status(200).json({
        success:true,
        data:createStudent
    })
    } catch (err) {
        const cop=err.statusCode || 500
        res.status(cop).json({
            success:false,
            message:err.message
        })
    }
}

exports.updateStudent=async(req,res)=>
{
    try {
        const{id}=req.params
    const findStudent=await Student.findById(id);
    if(!findStudent)
    {
        const err=new Error('Student not already exist');
        err.statusCode=500
        throw err
    }
    findStudent.name=req.body.name,
    findStudent.id=req.body.id,
    findStudent.division=req.body.division

    const updateStudent=await findStudent.save();

    res.status(200).json({
        success:true,
        data:updateStudent
    })
    } catch (err) {
        const cop=err.statusCode || 500
        res.status(cop).json({
            success:false,
            message:err.message
        })
    }
}

exports.deleteStudent=async(req,res)=>
{
    try {
        
    const{id}=req.params
    const findStudent=await Student.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        data:findStudent
    })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}