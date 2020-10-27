const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'privet', likeCount: 1000 },
        { id: 2, message: 'poka', likeCount: 10 }
    ],
    newPostText: 'it-kamasutra'
}

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let postText = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }

            state.postData.push(postText);
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state

        default:
            return state


    }



}

export const addPostActionCreator = () => ({ type: ADD_POST })


export const changeNewPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    text: text
})


export default profileReduser