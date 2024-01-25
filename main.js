/*
messaggio in un h1

bonus: 
aggiungi immagine
*/

const {createApp} = Vue

    createApp({
        data(){
            return {
                message1: "Hello Vue!",
                image: "https://picsum.photos/300",
                message2: "My name is Matteo and I'm bad at using Javascript",
            }
        }
    }).mount("#app")
