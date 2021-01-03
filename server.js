const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./config/db")

const app = express();

//BODY PARSER
app.use(express.json())

//LOAD ENV VARS
dotenv.config({ path: "./config/config.env" });

//MONGODB CONNECTION
connectDB();


//PORT INITIALISING
const PORT = process.env.PORT || 5000;




//ROUTE FILES
const bootcamps=require("./routes/bootcamps")







//MOUNTING ROUTES
app.use("/api/v1/bootcamps",bootcamps)



const server=app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} on port ${PORT}!`);
});

//HANDLE UNHANDLED PROMISE REJECTION
process.on("unhandledRejection",(err,promise)=>{
  console.log(`ERROR:${err.message}`)
  //CLOSE SERVER AND EXIT
  server.close(()=>process.exit(1));
})
