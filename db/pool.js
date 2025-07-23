import {Pool} from 'pg';

export const pool = new Pool({
    host: "localhost" , 
    user: "postgres",
    password:"123",
    database:"top_users",
    port:5432
});