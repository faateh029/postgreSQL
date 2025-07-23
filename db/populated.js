import pg from 'pg';
const  { Client } = pg
const SQL = `
  CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY ,
  username VARCHAR(255) );
  INSERT INTO usernames (username) VALUES ('jhon') ,('mike') , ('stephen');
  
`
let client = null;

async function main(){
    
    const dbURL = process.argv[2];
    client = new Client({connectionString:dbURL})
try {
if(!dbURL){
     console.error("Please provide a DB URL as an argument.");
    process.exit(1);
}
console.log("Seeding...");
await client.connect();
await client.query(SQL);
} catch (error) {
    throw new Error(error.message);
} finally{
    await client.end();
}
}
main();