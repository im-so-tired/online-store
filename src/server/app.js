import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import request from 'request'
import cors from 'cors'
const PORT = 3002
const DB_URL = "mongodb+srv://user:user@cluster0.3anqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()
const corsOptions ={
	origin:'*', 
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200,
}
app.use(express.json())
app.use('/api',router)
app.use(cors(corsOptions))
async function startApp(){
	try {
		await mongoose.connect(DB_URL,{useUnifiedTopology:true})
		app.listen(PORT,()=>console.log("Server is working"))
	} catch (error) {
		console.log(error)
	}
}
startApp()


// request("http://localhost:3002", function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });