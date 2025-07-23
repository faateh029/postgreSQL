import {pool} from '../db/pool.js';
import { getAllUserNames , postNewUser } from '../db/queries.js';


export const getController = async (req , res)=>{
    console.log("getController() running" );
    const result = await getAllUserNames();
     res.status(200).json(result);
}

export const postController = async (req,res)=>{
    console.log("postController() running");

    await postNewUser(req,res);
    res.status(200).json();
}