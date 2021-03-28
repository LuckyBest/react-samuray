import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
    return (
    <div>
        <div>
            My posts
        </div>
        <div>
           <textarea></textarea>
           <button>Add post</button>
        </div>
        <div className = {classes.posts}>
            <Post
                message = "Hi, how are you?"
                likeCounter = "20"
            />
            <Post
                message = "It's my first post."
                likeCounter = "15"
            />
        </div>
    </div>
     
    );
}
export default MyPosts;