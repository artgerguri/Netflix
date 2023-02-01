import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBC9K0K74EG2L0vJlD8xmfdx-aytWoQG74",
    authDomain: "netflix-16cfd.firebaseapp.com",
    projectId: "netflix-16cfd",
    storageBucket: "netflix-16cfd.appspot.com",
    messagingSenderId: "461502426992",
    appId: "1:461502426992:web:004be90e0a976e86ea69b5"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};