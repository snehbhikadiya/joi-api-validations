const Student=require('../model/clubModel');


exports.getClubStudet=async(req,res)=>
{
    try {
        const getClubStudet=await Student.find();
        res.status(200).json({
            success:true,
            data:getClubStudet
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


exports.getOneClubstudet=async(req,res)=>
{
    try {
        const{id}=req.params
        const getOneClubstudet=await Student.findOne({id});
        res.status(200).json({
            success:true,
            data:getOneClubstudet
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}




exports.createClubStudent=async(req,res)=>
{
    try {
        const{clubtype,fees,day}=req.body

    const studentData={
        clubtype,fees,day
    }
    const createClubStudent=await Student.create(studentData);

    res.status(200).json({
        success:true,
        data:createClubStudent
    })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}



exports.updateClubStudent=async(req,res)=>
{
    try {
        const{id}=req.params
    const findClubStudent=await Student.findById(id);
    if(!findClubStudent)
    {
        const err=new Error('Student club not already exist');
        err.statusCode=500
        throw err
    }
    findClubStudent.clubtype=req.body.clubtype,
    findClubStudent.fees=req.body.fees,
    findClubStudent.day=req.body.day

    const updateClubStudent=await findClubStudent.save();

    res.status(200).json({
        success:true,
        data:updateClubStudent
    })
    } catch (err) {
        const cop=err.statusCode || 500
        res.status(cop).json({
            success:false,
            message:err.message
        })
    }
}


exports.deleteClubStudent=async(req,res)=>
{
    try {
        
    const{id}=req.params
    const deleteClubStudent=await Student.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        data:deleteClubStudent
    })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
