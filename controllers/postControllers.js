const db = require('../db/db.js');
function getAllPosts(req,res){
    return res.json(db.posts);
};
module.exports = {getAllPosts}