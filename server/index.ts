require('dotenv').config();
import express from 'express';
import { Request, Response, Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { postPersonality } from './controllers/postPersonality.controller';

const app: Express = express();
const port: number = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.post('/postpersonality', postPersonality)


app.get('/status',async (req:Request, res: Response) => {
    res.send("Node server is running");
})

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

export default app;