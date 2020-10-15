const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogReduser = (state, action) => {

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