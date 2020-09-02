import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
      <div className={c.posts}>
        <div className={c.post_title}>My posts</div>
        <form action="" className={c.post_form}>
          <input type="text" placeholder="your news..." className={c.post_form__input} />
          <button type='submit' className={`${c.post_form__btn} ${c.btn} `}>Send</button>
        </form>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    
    )
}

export default MyPosts