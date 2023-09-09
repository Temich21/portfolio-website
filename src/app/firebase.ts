import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEkkdF4SAlW1IuamlceVS0EZZyLaHb1Zk",
    authDomain: "portfolio-website-abe4a.firebaseapp.com",
    projectId: "portfolio-website-abe4a",
    storageBucket: "portfolio-website-abe4a.appspot.com",
    messagingSenderId: "401437459396",
    appId: "1:401437459396:web:80c98dac01ccbff7091a91",
    measurementId: "G-VDYT2TH6GJ"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)