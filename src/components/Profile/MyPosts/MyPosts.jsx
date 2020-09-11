import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'

const postData = [
  {id: 1 , message: 'privet' , likeCount: 1000},
  {id: 2 , message: 'poka' , likeCount: 10}
]

const MyPosts = () => {
    return (
      <div className={c.posts}>
        <div className={c.post_title}>My posts</div>
        <form action="" className={c.post_form}>
          <input type="text" placeholder="your news..." className={c.post_form__input} />
          <button type='submit' className={`${c.post_form__btn} ${c.btn} `}>Send</button>
        </form>
        <Post message={postData[0].message} likeCount={postData[0].likeCount} />
        <Post message={postData[1].message} likeCount={postData[1].likeCount} />
        
      </div>
    
    )
}

export default MyPosts