
const Post = require("../models/Post");
class crudOpp{
    static get= async (req, res) => {
        const post = new Post({
          title: req.body.title,
          content: req.body.content
        });
        await post.save();
        res.send(post);
      }
    static post=async (req, res) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        });
        await post.save();
        res.send(post);
    }
    static getId= async (req, res) => {
        try {
          const post = await Post.findOne({ _id: req.params.id });
          res.send(post);
        } catch {
          res.status(404);
          res.send({ error: "Post doesn't exist!" });
        }}

    static patch= async (req, res) => {
        try {
          const post = await Post.findOne({ _id: req.params.id });
      
          if (req.body.title) {
            post.title = req.body.title;
          }
      
          if (req.body.content) {
            post.content = req.body.content;
          }
      
          await post.save();
          res.send(post);
        } catch {
          res.status(404);
          res.send({ error: "Post doesn't exist!" });
        }
      }
      static delete=async (req, res) => {
        try {
          await Post.deleteOne({ _id: req.params.id });
          res.status(204).send();
        } catch {
          res.status(404);
          res.send({ error: "Post doesn't exist!" });
        }
      }
}
module.exports= crudOpp;