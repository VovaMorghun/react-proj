const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogReduser = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessage = action.body;
            return state

        case SEND_MESSAGE:
            if (state.newMessage !== '') {
                const body = {
                    id: 5,
                    message: state.newMessage
                };
                state.messagesData.push(body)
                state.newMessage = '';
                return state

            }
        default:
            return state
    }


}

export const newMessageActionCreator = (body) => ({
    type: NEW_MESSAGE_BODY,
    body: body
})

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export default dialogReduser;