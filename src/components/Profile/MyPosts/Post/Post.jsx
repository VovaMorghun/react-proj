import React from 'react';
import c from './Post.module.css'

const Post = () => {
    return (
      <div className={c.lastPosts_item}>
        <div className={c.lastPosts_item__circl}></div>
        <div className={c.lastPosts_item__text}>Hi evyone!</div>
      </div>
    
    )
}

export default Post