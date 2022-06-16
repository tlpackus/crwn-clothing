import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4K1ewyyausx_-wqFIpGeJVhOql1CP7b0",
  authDomain: "crwn-clothing-db-6b24e.firebaseapp.com",
  projectId: "crwn-clothing-db-6b24e",
  storageBucket: "crwn-clothing-db-6b24e.appspot.com",
  messagingSenderId: "777468606497",
  appId: "1:777468606497:web:5a336b4255eabcbb588b60"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);