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

    return (< MyPosts />)


}

export default MyPosts