import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: //API_KEY,
    authDomain: //AUTH_DOMAIN,
    projectId: //PROJECT_ID,
    storageBucket: //STORAGE_BUCKET,
    messagingSenderId: //MESSAGE_SENDER_ID,
    appId: //APP_ID,
    measurementId: //MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, []);

    return currentUser;
}

export function logout() {
    return signOut(auth);
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}