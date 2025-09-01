const db = require('../db/db.js');
const CustomNotFoundError = require('../Errors/CustomError.js');
function getAllAuthors(req,res){
    return res.json(db.authorProfiles);
};
function getAuthorById(req,res){
    const id = Number(req.params.id);
    const posts = db.authorProfiles;
    const post = posts.find(element => element.id === id);
    if(!post) throw new CustomNotFoundError("Something went wrongg")
    return res.json(post);
};
function addAuthor(req,res){
    const post = req.body;
    const posts = db.authorProfiles;
    const lastPost = posts[posts.length -1].id;
    post.id = lastPost+1;
    posts.push(post)
    return res.redirect('/authors')
}
module.exports = {getAllAuthors,getAuthorById,addAuthor}