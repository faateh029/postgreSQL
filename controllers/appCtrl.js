import {pool} from '../db/pool.js';
import { getUserNames , postNewUser, searchUsernames , deleteHelper } from '../db/queries.js';


export const getController = async (req , res)=>{
    console.log("getController() running" );
    let result='';
    if(req.query.search){
        result = await searchUsernames(req,res);
        //console.log(req.query.search , result.rows);
        return res.status(200).json(result);
    }
     result = await getUserNames();
     res.status(200).json(result);
}

export const postController = async (req,res)=>{
    console.log("postController() running");
    await postNewUser(req,res);
    res.status(200).json({msg:"user added successfully"});
}


export const deleteController = async (req,res)=>{
        await deleteHelper();
        res.status(200).json({msg:"All users deleted"});
}