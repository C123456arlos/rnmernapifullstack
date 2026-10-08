export type MessageType = {
    id: number,
    text: string,
    fromUser: boolean,
    timestamp: Date,
    time:string
}
export type ConversationType = {
    id: number,
    user: {
        name: string,
        username: string,
        avatar: string,
        verified:boolean
    },
    lastMessage: string,
    time: string,
    timestamp: Date,
    messages: MessageType[]
}
export const CONVERSATIONS: ConversationType[] = [
    {
        id: 1,
        user: {
            name: 'person name',
            username: 'one',
            avatar: 'https://images.unsplash.com/vector-1776244476031-db2aa624a2a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
            verified:true
        },
        lastMessage: 'see you at the meetup tomorrow dont forget to bring your laptop',
        time: '2d',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        messages: [
            {
                id: 1,
                text: 'are you planning to attend the react meetup this weekend',
                fromUser: false, 
                timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          time:'3d'
        },
                {
        id: 2,
        text: 'going really well just finished the authentication flow want to see a demo',
        fromUser: true,
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        time:'4d'
    },
    {
        id: 3,
        text: 'the new design looks fantastic when can we schedule a review great collaboration on the project the demo was impressive',
        fromUser: false,
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        time:'1w'
    }

        ]
    },
    {
        id: 2,
        user: {
            name: 'person name',
            username: 'one',
            avatar: 'https://images.unsplash.com/vector-1776244476031-db2aa624a2a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
            verified:false
        },
        lastMessage: 'see you at the meetup tomorrow dont forget to bring your laptop',
        time: '2d',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        messages: [
            {
                id: 1,
                text: 'are you planning to attend the react meetup this weekend',
                fromUser: false, 
                timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          time:'3d'
        },
                {
        id: 2,
        text: 'going really well just finished the authentication flow want to see a demo',
        fromUser: true,
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        time:'4d'
    },
    {
        id: 3,
        text: 'the new design looks fantastic when can we schedule a review great collaboration on the project the demo was impressive',
        fromUser: false,
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        time:'1w'
    }

        ]
    },
    {
        id: 3,
        user: {
            name: 'person name',
            username: 'one',
            avatar: 'https://images.unsplash.com/vector-1776244476031-db2aa624a2a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
            verified:false
        },
        lastMessage: 'see you at the meetup tomorrow dont forget to bring your laptop',
        time: '2d',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        messages: [
            {
                id: 1,
                text: 'are you planning to attend the react meetup this weekend',
                fromUser: false, 
                timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          time:'3d'
        },
                {
        id: 2,
        text: 'going really well just finished the authentication flow want to see a demo',
        fromUser: true,
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        time:'4d'
    },
    {
        id: 3,
        text: 'the new design looks fantastic when can we schedule a review great collaboration on the project the demo was impressive',
        fromUser: false,
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        time:'1w'
    }

        ]
    },
]