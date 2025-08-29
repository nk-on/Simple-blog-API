const db = require('../db/db.js');
function getAllPosts(req,res){
    return res.json(db.posts);
};
function getPostById(req,res){
    const id = Number(req.params.id);
    const posts = db.posts;
    const post = posts.find(element => element.id === id);
    if(!post){
        res.json({message:'Error'})
    }
    return res.json(post);
}
module.exports = {getAllPosts,getPostById}