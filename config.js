import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {

};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()