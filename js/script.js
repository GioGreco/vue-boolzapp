"use strict";

const { createApp } = Vue;
const dt = luxon.DateTime;

const app = createApp({
    data(){
        return{
            testDate: '10/01/2020 15:30:55',
            searchContacts: '',
            activeContact: 1,
            active: false,
            notificationPanel: false,
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {   
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            showOptions: false,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            showOptions: false,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            showOptions: false,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        }, 
                        {
                            showOptions: false,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ]
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ]
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages:[
                        {
                            showOptions: false,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            showOptions: false,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
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
            console.log(contact);
        },
        parsedDate(d){
            if(d){
                let parsed = dt.fromFormat(d, 'dd/LL/yyyy hh:mm:ss').toFormat('MMMM dd yyyy, HH:mm');
            return parsed;
            }
            else{
                return '---';
            }
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
        }
    },
    mounted(){
    }
});

app.mount('#app')