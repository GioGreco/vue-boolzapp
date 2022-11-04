"use strict";

const { createApp } = Vue;
const dt = luxon.DateTime;

const app = createApp({
    data(){
        return{
            icons:[
                '&#128512;',
                '&#128513;',
                '&#128514;',
                '&#128515;',
                '&#128516;',
                '&#128517;',
                '&#128518;',
                '&#128519;',
                '&#128521;',
                '&#128522;',
                '&#128523;',
                '&#128524;',
                '&#128525;',
                '&#128526;',
                '&#128528;',
                '&#128529;',
                '&#128530;',
                '&#128536;',
                '&#128545;',
                '&#128548;',
                '&#128561;',
                '&#129315;',
                '&#129299;',
                '&#129319;',
                '&#129321;',
                '&#129325;',
                '&#129488;',
                '&#9996;',
                '&#9995;',
                '&#10024;',
                '&#10062;',
                '&#128064;',
                '&#128077;',
                '&#128079;',
                '&#128152;',
                '&#128149;',
                '&#128156;',
                '&#128158;',
                '&#128584;',
                '&#129310;',
                '&#129505;',
                '&#127802;',
                '&#127801;',
                '&#9749;'
              ],
            searchContacts: '',
            activeContact: 0,
            active: false,
            isTyping: false,
            notificationPanel: false,
            showChat: false,
            splash: false,
            startLoad: false,
            showEmoji: false,
            contacts: [
                {   
                    showChatOptions: false,
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages:[
                        {
                            id: 1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {   
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id:3,
                            showOptions: false,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id:3,
                            showOptions: false,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            id:1,
                            showOptions: false,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        }, 
                        {
                            id:3,
                            showOptions: false,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id:3,
                            showOptions: false,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ]
                },
                {
                    showChatOptions: false,
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages:[
                        {
                            id:1,
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id:2,
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id:3,
                            showOptions: false,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ] 
                }
            ],
            newMessage: {
                id: '',
                date: '',
                message: '',
                status: ''
            },
            answers:['Ok!', 'Ti richiamo tra 5 minuti', 'Non posso ho la febbre!', 'Alla grande!', 'Ci aggiorniamo più tardi', 'Va bene!']
        }
    },
    methods: {
        sendMessage(){
            if(this.newMessage.message.length > 0){
                this.isTyping = true;
                this.newMessage.id = randomBetween(9, 1000000);
                this.newMessage.showOptions = false,
                this.newMessage.status = 'sent';
                let newDate = dt.now();
                this.newMessage.date = newDate.toFormat('dd/LL/yyyy hh:mm:ss');
                this.contacts[this.activeContact - 1].messages.push({...this.newMessage});
            }
            this.newMessage.id = '';
            this.newMessage.message = '';
            this.newMessage.date = '';
            this.newMessage.status = '';

            // Vue.nextTick(() => {
            //     const chatBox = document.querySelector('.contact-window');
            //     chatBox.scrollTo(0, chatBox.scrollHeight)
            // });

            setTimeout(() => {
                    this.newMessage.id = randomBetween(9, 1000000);
                    this.newMessage.showOptions = false,
                    this.newMessage.status = 'received';
                    let newDate = dt.now();
                    this.newMessage.date = newDate.toFormat('dd/LL/yyyy hh:mm:ss');
                    this.newMessage.message = this.answers[randomBetween(0, this.answers.length - 1)];
                    this.contacts[this.activeContact - 1].messages.push({...this.newMessage});
                    this.newMessage.id = '';
                    this.newMessage.message = '';
                    this.newMessage.date = '';
                    this.newMessage.status = '';
                    this.isTyping = false;
            }, 2000)
        },
        showOptions(mex){
            mex.showOptions = true;
        },
        hideOptions(mex){
            mex.showOptions = false;
        },
        removeMessage(contact, message){
            contact.messages.splice(message, 1);
        },
        parsedDate(d){
            let parsed = dt.fromFormat(d, 'dd/LL/yyyy hh:mm:ss').toFormat('MMMM dd yyyy, HH:mm');
            return parsed;
        },
        addEmoji(emoji){
            this.newMessage.message += this.icons[emoji];
        }
    },
    computed: {
        getBgImage(){
            return `background-image: url(.${this.contacts[this.activeContact - 1].avatar})`
        },
        getContactName(){
            return this.contacts[this.activeContact - 1].name;
        },
        filterContacts(){
            const filteredList = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchContacts.toLowerCase());
            })
            return filteredList;
        },
    },
    mounted(){
        this.startLoad = true;
        setTimeout(() => {
            this.splash = true;
            this.startLoad = false;
        }, 3000)
    },
    updated(){
        Vue.nextTick(() => {
            const chatBox = document.querySelector('.active-chat');
            chatBox.scrollTo(0, chatBox.scrollHeight)
        });
    }
});

app.mount('#app')