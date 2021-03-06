const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        this._config = {
            apiKey: "AIzaSyC86o0nkmV7guxjgCAfu-GTxJa7G08StZ8",
            authDomain: "whatsapp-clone-b3be0.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b3be0.firebaseio.com",
            projectId: "whatsapp-clone-b3be0",
            storageBucket: "whatsapp-clone-b3be0.appspot.com",
            messagingSenderId: "715910181104"
        };

        this.init();

    }

    init(){

        if (!window._initializedFirebase) {
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshots: true
            });

            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();
            
            firebase.auth().signInWithPopup(provider)
            .then(result => {

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user,
                    token
                });

            })
            .catch(err => {
                f(err);
            });

        });

    }

}