import {pool} from './pool.js';
export const getAllUserNames = async ()=>{
   const result = await pool.query("SELECT * FROM usernames") ;  
   return result.rows;
}

export const postNewUser = async (req,res)=>{
    const {username} = req.body;
    await pool.query("INSERT INTO usernames (username) VALUES ($1) " , [username])
}