import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    return (
      <div className={c.lastPosts_item}>
        <div className={c.lastPosts_item__circl}></div>
    <div className={c.lastPosts_item__text}>{props.message}</div>
        <div className={c.likeCount}>Post get {props.likeCount} like </div>
      </div>
    
    )
}

export default Post