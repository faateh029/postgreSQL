


export const getController =  (req , res)=>{
    console.log("getController() running" );
     res.status(200).json("users will be logged here");
}

export const postController =  (req,res)=>{
    console.log("postController() running");
    console.log(`User is ${req.body.username}`);
    res.status(200).json({msg:"Ok!"});
}