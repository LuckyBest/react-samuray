import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
    return (
    <>
        <div className = {classes.item}>
            <img   src ='https://th.bing.com/th?id=OIF.sdfq4BOG%2ffvf2X58nvD9Zw&pid=ImgDet&rs=1'/>
            <p>{props.message}</p>
       </div>   
        <div>
            <span>
                {props.likeCounter} Likes
            </span>
        </div>      
    </>
    );
}
export default Post;