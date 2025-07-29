import express from 'express'
import { appRouter } from './routes/route.js';
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
//app.use('/' , appRouter);
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
    {id:10 , name:'user 10'},
    {id:11 , name:'user 11'},
    {id:12 , name:'user 12'},
    {id:13 , name:'user 13'},
    {id:14 , name:'user 14'},
     {id:15 , name:'user 15'}
]

const posts = [
    {id:1 , name:'posts 1'},
    {id:2 , name:'posts 2'},
    {id:3 , name:'posts 3'},
    {id:4 , name:'posts 4'},
    {id:5 , name:'posts 5'},
    {id:6 , name:'posts 6'},
    {id:7 , name:'posts 7'},
    {id:8 , name:'posts 8'},
    {id:9 , name:'posts 9'},
    {id:10 , name:'posts 10'},
    {id:11 , name:'posts 11'},
    {id:12 , name:'posts 12'},
    {id:13 , name:'posts 13'},
    {id:14 , name:'posts 14'},
    {id:15 , name:'posts 15'}
]

app.get('/posts',  paginatedResults(posts) , (req,res)=>{
    res.json(res.paginatedResults);
})
app.get('/users' ,paginatedResults(users) ,  (req ,res)=>{
   res.json(res.paginatedResults)
})


function paginatedResults(model){
    return (req,res,next)=>{
          const page = parseInt(req.query.page) ; 
    const limit = parseInt(req.query.limit);
    const startIndex = (page-1)*limit;
    const endIndex = page*limit;
    const results = {};
    if(endIndex<model.length){
         results.next = {
        page: page+1,
        limit:limit
    }
    }

    if(startIndex>0){
    results.previous = {
        page:page-1 ,
        limit:limit
    }  
    }
    results.results =model.slice(startIndex, endIndex);
    res.paginatedResults = results ;
    next();
    }
}
app.listen(PORT , (req,res)=>{
    console.log(`server running on port ${PORT}`);
})