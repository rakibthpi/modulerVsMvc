
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();
const port = 3000;

// perser 
app.use(express.json());
app.use(cors());

// application 
app.use('/api', studentRoute)


const getWelcomeData =  (req: Request, res:Response)=>{
    console.log("Hello bangladesh")
}

app.get('/rakib', getWelcomeData);


export default app
