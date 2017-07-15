import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBiAKNF1lpvMZhTod0lpC_bSFXdrAfJ-A8",
    authDomain: "fire-vue-a9f77.firebaseapp.com",
    databaseURL: "https://fire-vue-a9f77.firebaseio.com",
    projectId: "fire-vue-a9f77",
    storageBucket: "",
    messagingSenderId: "340681066578"
});

export const db = firebaseApp.database();