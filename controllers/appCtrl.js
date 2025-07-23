import {pool} from '../db/pool.js';


export const getController = async (req , res)=>{
    console.log("getController() running" );
    const result = await pool.query("SELECT * FROM usernames");
     res.status(200).json(result);
}

export const postController = async (req,res)=>{
    console.log("postController() running");
    await pool.query("INSERT INTO usernames (username) VALUES  ($1)" , [req.body.username]);
    res.status(200).json({msg:"Ok!"});
}