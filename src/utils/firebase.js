import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "food-blog-bac46.firebaseapp.com",
  projectId: "food-blog-bac46",
  storageBucket: "food-blog-bac46.appspot.com",
  messagingSenderId: "113214562465",
  appId: "1:113214562465:web:1d6d3558a1d76b21dad0e0"
};

export const app = initializeApp(firebaseConfig);