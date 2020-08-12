const app = require('firebase/app');

require('firebase/auth');
require('firebase/firestore');

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    //  ** Auth API **

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.doCreateUserWithEmailAndPassword(email, password);
    }

    doGetUser = (id) => {
        return this.db.collection('users').doc(id).get();
    }

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // ** User API **
    doCreateUser = (user) => {
        return this.db.collection('users').doc(id).set(user);
    }
}

const firebase = new Firebase();

module.exports = firebase;