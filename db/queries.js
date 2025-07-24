import {pool} from './pool.js';
export const getUserNames = async ()=>{ 
   const result = await pool.query("SELECT * FROM usernames");  
   return result.rows;
}

export const postNewUser = async (req,res)=>{
    const {username} = req.body;
    await pool.query("INSERT INTO usernames (username) VALUES ($1) " , [username]);
}

export const searchUsernames= async(req,res)=>{
     const searchItem = req.query.search;
     const result = await pool.query(`SELECT * FROM usernames WHERE username ILIKE $1` , [`%${searchItem}%`]);
    
    return result.rows;
}

export const deleteHelper = async ()=>{
    await pool.query(`DELETE FROM usernames;
                     ALTER SEQUENCE  public.usernames_id_seq RESTART WITH 1;`);
}