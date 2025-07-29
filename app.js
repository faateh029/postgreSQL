import express from 'express'
import { appRouter } from './routes/route.js';
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());

const users = [
    {id:1 , name:'user 1'},
    {id:2 , name:'user 2'},
    {id:3 , name:'user 3'},
    {id:4 , name:'user 4'},
    {id:5 , name:'user 5'},
    {id:6 , name:'user 6'},
    {id:7 , name:'user 7'},
    {id:8 , name:'user 8'},
    {id:9 , name:'user 9'},
    {id:10 , name:'user 10'}

]
app.get('/users' , (req ,res)=>{
    const page = req.query.page ; 
    const limit = req.query.limit;
    const startIndex = (page-1)*limit;
    const endIndex = page*limit;
    const resultUsers  = users.slice(startIndex, endIndex);
    res.json(resultUsers)
})
//app.use('/' , appRouter);

app.listen(PORT , (req,res)=>{
    console.log(`server running on port ${PORT}`);
})