/*
messaggio in un h1

bonus: 
aggiungi immagine
*/

const {createApp} = Vue

    createApp({
        data(){
            return {
                message: "Hello Vue!",
                image: "https://picsum.photos/300"
            }
        }
    }).mount("#app")
