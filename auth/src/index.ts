import express from 'express';
import {json} from 'body-parser';

const app = express();

app.use(json());

app.listen(3000, ()=> {
    console.log(" App is running at port 3000")
})