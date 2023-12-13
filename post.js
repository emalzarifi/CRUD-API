const express = require('express');
const router  = express.Router();
const schema = require('../mudels/schema');

router.get('/', async (req, res) => {
   try{
    const posts = await schema.find();
    if(!posts) throw Error('No Item');
    res.status(200).json(posts);

   }catch(err){
    res.status(400).json({ msg: err});
   }
});

router.get('/:id', async (req, res) => {
    try{
     const post = await schema.findById(req.params.id);
     if(!post) throw Error('No Item');
     res.status(200).json(post);
 
    }catch(err){
     res.status(400).json({ msg: err});
    }
 });


router.post('/', async(req, res ) => {
    //res.send('lets create a post');
    const newPost = new schema(req.body);
    try {
        const post = await newPost.save();
        if(!post) throw Error('something went wrong while saving the post');
        res.status(200).json(post);
    } catch(err) {
        res.status(400).json({ msg: err});
    }
});
router.delete('/:id', async (req, res) => {
    try {
     const post = await schema.findByIdAndDelete(req.params.id);
     if(!post) throw Error('something went wrong while saving the post');
        res.status(200).json({ success: true })
    }catch(err){
     res.status(400).json({ msg: err});
    }
 });

 router.patch('/:id', async (req, res) => {
    try {
     const post = await schema.findByIdAndUpdate(req.params.id, req.body);
     if(!post) throw Error('something went wrong while saving the post');
        res.status(200).json({ success: true })
    }catch(err){
     res.status(400).json({ msg: err});
    }
 });

module.exports = router;