import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let addPost = () => props.addPost();

  let posts = props.posts.map((post) => (
    <Post message={post.message} likeCounter={post.likesCount} id={post.id} />
  ));

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.myPostsWrapper}>
      <div>My posts</div>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
