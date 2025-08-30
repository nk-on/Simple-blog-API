const db = require('../db/db.js');
function getAllAuthors(req,res){
    return res.json(db.authorProfiles);
};
function getAuthorById(req,res){
    const id = Number(req.params.id);
    const posts = db.authorProfiles;
    const post = posts.find(element => element.id === id);
    if(!post){
        res.json({message:'Error'})
    }
    return res.json(post);
};
function addAuthor(req,res){
    const post = req.body;
    const posts = db.authorProfiles;
    posts.push(post)
    return res.send('data received')
}
module.exports = {getAllAuthors,getAuthorById,addAuthor}