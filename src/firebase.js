import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDk1k0V_aUthnjWPwwNltv-i3Yk9J5-XT0",
    authDomain: "netflix-clone-reactjs-a4418.firebaseapp.com",
    projectId: "netflix-clone-reactjs-a4418",
    storageBucket: "netflix-clone-reactjs-a4418.appspot.com",
    messagingSenderId: "74122307054",
    appId: "1:74122307054:web:20a8ac5bbe33e216531aff"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth }
export default db;