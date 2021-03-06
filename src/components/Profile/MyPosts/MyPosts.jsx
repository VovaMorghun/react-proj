import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator , changeNewPostTextActionCreator} from '../../../redux/profileReduser'





const MyPosts = (props) => {
debugger
  const posts = props.postData.map(post => <Post message={post.message} likeCount={post.likeCount} />)
  
  const NewPostEl = React.createRef()

  const addPost = () => {
    
    props.dispatch(addPostActionCreator() )
    // props.changeNewPostText('')
  }

  const onPostChange = () => {
    const text = NewPostEl.current.value
    let action = changeNewPostTextActionCreator(text)
    props.dispatch( action )
  }

  return (
    <div className={c.posts}>
      <div className={c.post_title}>My posts</div>
      <div className={c.post_form}>
        <input type="text" 
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="your news..." 
          className={c.post_form__input}
          ref={NewPostEl} />
        <button type='submit' className={`${c.post_form__btn} ${c.btn} `} onClick={addPost} >Send</button>
      </div> 
      {posts}
        
    </div>
    
  )
}

export default MyPosts