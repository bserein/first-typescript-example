interface User {
    id: string;
    username: string;
}

interface Message{
    id: string;
    userId: string;
    text: string;
    sentAt: Date;
}

const createUser = (user: User) => {

}

const sendMessage = (message: Message) => {

}

const getMessages = (): Message[] => { //saying its going to return an array of messages
    return []; //saying itll return the message
}