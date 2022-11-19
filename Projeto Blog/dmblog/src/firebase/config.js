
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATDmZit39onqQjBxcuHQGoMN4XahAfCog",
  authDomain: "dmblog.firebaseapp.com",
  projectId: "dmblog",
  storageBucket: "dmblog.appspot.com",
  messagingSenderId: "644773547993",
  appId: "1:644773547993:web:3900b9cd69e50ecfea13c8"
};

const app = initializeApp(firebaseConfig);
//Chamando banco de Dados
const db = getFirestore(app)

export {db}