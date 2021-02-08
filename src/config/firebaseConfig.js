import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAT6pK06TeLhgBwbyQQsvMrIhLLVWUpwck',
  authDomain: 'party-plan-147f2.firebaseapp.com',
  projectId: 'party-plan-147f2',
  storageBucket: 'party-plan-147f2.appspot.com',
  messagingSenderId: '353938413217',
  appId: '1:353938413217:web:8b55f21e7d5f93b3d742e0',
  measurementId: 'G-ZM3EDCGF9D',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  timestampInSnapshots: true,
});

export default firebase;
