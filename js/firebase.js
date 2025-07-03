let firebaseConfig = {
    // Enter your firebase credentials
    
    authDomain: "blogism-6651a.firebaseapp.com",
    projectId: "blogism-6651a",
    storageBucket: "blogism-6651a.appspot.com",
    messagingSenderId: "368575118852",
    appId: "1:368575118852:web:a0739c7b9d3d7dd895bf51",
    measurementId: "G-278N54HNEN"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}
