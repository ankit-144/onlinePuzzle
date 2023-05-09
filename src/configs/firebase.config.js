import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  setDoc,
  doc,
  collection,
  query,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACww5wGfde5Mp_lA1cnTeU0m0B59Hmwxk",
  authDomain: "project-scope-82f4e.firebaseapp.com",
  projectId: "project-scope-82f4e",
  storageBucket: "project-scope-82f4e.appspot.com",
  messagingSenderId: "1029971338891",
  appId: "1:1029971338891:web:3d8fe70c450f540d87d68e",
  measurementId: "G-LKKE4M5214",
};
const provider = new GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     localStorage.setItem("user", JSON.stringify(user));
//   } else {
//     localStorage.removeItem("user");
//   }
// });

export async function SignInPopup() {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    const userData = response.user;

    await setDoc(doc(db, "users", userData.uid), {
      uid: userData.uid,
      email: userData.email,
      username: userData.displayName,
    });
    return "success";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  }
}

export async function LoginPopup() {
  try {
    const response = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;
    const user = response.user;
    const userDetails = {
      uid: user.uid,
      email: user.email,
      username: user.displayName,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return userDetails;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage);
  }
}

export async function signupWithEmail(email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("user", JSON.stringify(user));
    return "success";
  } catch (e) {
    console.log(e.message);
    return "failed";
  }
}

export async function loginWithEmail(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(user));
    return "success";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return "failed";
  }
}

export async function logout() {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    return "success";
  } catch (e) {
    console.log(e);
    return "failed";
  }
}
