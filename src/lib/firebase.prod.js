/* eslint-disable import/prefer-default-export */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedData, seedDatabase } from '../seed';
// we need to seed database

// we need a config here

const config = {
  apiKey: 'AIzaSyCUYeAX9P4d7Hy0zmIPPO5a30u6uuqBlk4',
  authDomain: 'netflix-d349c.firebaseapp.com',
  databaseURL: 'https://netflix-d349c.firebaseio.com',
  projectId: 'netflix-d349c',
  storageBucket: 'netflix-d349c.appspot.com',
  messagingSenderId: '653286665677',
  appId: '1:653286665677:web:21643f47d7c9276544a884',
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
