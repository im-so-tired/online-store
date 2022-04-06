import  Router  from "express";
import Post from "./Post.js";
const router = new Router()
router.get('/items',async (req,res)=>{
	try {
		res.send("ok")
		// const posts = await Post.find()
		// return res.json(posts)
	} catch (error) {
		console.log(error)
	}
})
router.post('/items', async (req,res)=>{
	try {
		const {price,img,description} = req.body
		const post = await Post.create({price,img,description})
		res.send(post)
		
	} catch (error) {
		console.log(error)
	}
})


export default router