debugger

const store = {



    _state: {



        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Vova" },
                { id: 2, name: "Vasya" },
                { id: 3, name: "Petya" },
                { id: 3, name: "Petya" },
                { id: 3, name: "Petya" },
                { id: 3, name: "Petya" },
                { id: 4, name: "Yura" }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Hello" },
                { id: 3, message: "YO" },
                { id: 4, message: "Yooo" },
            ],



        },

        profilePage: {
            postData: [
                { id: 1, message: 'privet', likeCount: 1000 },
                { id: 2, message: 'poka', likeCount: 10 }
            ],
            newPostText: 'it-kamasutra'

        },



    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            debugger
            let postText = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            }

            this._state.profilePage.postData.push(postText);
            this._state.profilePage.newPostText = ''
            this.rerenderEntrieTree(this._state)

        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this.rerenderEntrieTree(this._state)
        }

    },

    getState() {
        return this
    },

    rerenderEntrieTree() {
        console.log('state changed');
    },

    subscribe(observer) {
        this.rerenderEntrieTree = observer
    }


}


export default store