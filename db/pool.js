import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    host:process.env.DB_HOST,  
    user: process.env.DB_USER ,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    port:process.env.PORT
});