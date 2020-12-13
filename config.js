import * as firebase from'firbase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAZSsuL4LmjbjThZ49mrmYHWGIbjR5peEk",
  authDomain: "story-93433.firebaseapp.com",
  databaseURL: "https://story-93433-default-rtdb.firebaseio.com",
  projectId: "story-93433",
  storageBucket: "story-93433.appspot.com",
  messagingSenderId: "733047423351",
  appId: "1:733047423351:web:0b63d09de232dcda342172",
  measurementId: "G-9L2F2QJWZB"
};
    firebase.intializeApp(firebaseConfig)
    export default firebase.firestore()