import express from 'express'
import { appRouter } from './routes/route.js';
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json());
app.use('/' , appRouter);

app.listen(PORT , (req,res)=>{
    console.log(`server running on port ${PORT}`);
})