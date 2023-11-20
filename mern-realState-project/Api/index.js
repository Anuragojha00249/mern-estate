import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.listen(port, () => {
  console.log(`Mr. Anurag , Server is running on port ${port}!`);
});
