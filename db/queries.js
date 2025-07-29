import { parse } from 'dotenv';
import {pool} from './pool.js';
// export const getUserNames = async ()=>{ 
//    const result = await pool.query("SELECT * FROM usernames");  
//    return result.rows;
// }
export const paginatedResults = async (req,res)=>{
    const page = parseInt(req.query.page) ||1; 
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page-1)*limit;
     const total =  await pool.query(`SELECT COUNT(*) FROM users`)
       const PaginatedResult = await pool.query(`SELECT * FROM users ORDER BY id LIMIT ($1) OFFSET ($2)` , [limit,offset])
      
      const result = {
        page:page , 
        limit:limit, 
        total:parseInt(total.rows[0].count) , 
        totalPages:Math.ceil(total.rows[0].count/limit),
        data : PaginatedResult.rows
      }
       return result;
}
export const postNewUser = async (req,res)=>{
    const {username} = req.body;
    await pool.query("INSERT INTO users (username) VALUES ($1) " , [username]);
}

export const searchUsernames= async(req,res)=>{
     const searchItem = req.query.search;
     const result = await pool.query(`SELECT * FROM users WHERE users ILIKE $1` , 
        [`%${searchItem}%`]);
    
    return result.rows;
}

export const deleteHelper = async ()=>{
    await pool.query(`DELETE FROM users;
                     ALTER SEQUENCE  public.users_id_seq RESTART WITH 1;`);
}