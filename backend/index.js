import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
mongoose.connect('mongodb://localhost:27017/MERN_DB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open', () => console.log('Database connected..'));

app.use(cors());
app.use(express.json());

app.listen(5000, ()=> console.log('Server alive..'));
