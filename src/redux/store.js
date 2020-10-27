import dialogReduser from './dialogReduser'
import profileReduser from './profileReduser'




const store = {



    _state: {



        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Vova" },
                { id: 2, name: "Vasya" },
                { id: 3, name: "Petya" },
                { id: 4, name: "Yura" }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Hello" },
                { id: 3, message: "YO" },
                { id: 4, message: "Yooo" },
            ],
            newMessage: '',



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

        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
        this._state.profilePage = profileReduser(this._state.profilePage, action);

        this.rerenderEntrieTree(this._state)

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