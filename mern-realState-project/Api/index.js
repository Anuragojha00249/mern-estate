import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;
const clusterName = process.env.DB_CLUSTER_NAME;

mongoose.connect(`mongodb+srv://${username}:${password}@${clusterName}/${databaseName}?retryWrites=true&w=majority`).then(() => {
  console.log('Mr. Anurag , Connected to MongoDB!');
})
.catch((err) => {
  console.log(err);
});;


const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Mr. Anurag , Server is running on port ${port}!`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// a middleware created with a callback function to handle possible errors 
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})