import express from 'express';
require('dotenv').config();
import router from './routes';
import configViewEngine from './configs/viewEngine';
import connectDB from './configs/connectDB';

const app = express();
const port = process.env.PORT || 8080;

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//view engine
configViewEngine(app);

//routes
router(app);

//Connect DB
connectDB();

app.listen(port, () => {
  console.log(`Server đã chạy ở http://localhost:${port}`);
});
