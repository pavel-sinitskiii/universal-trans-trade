import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDpY1G_CSH4uBkVO1nkpQLvBNupvdSKnvY',
  authDomain: 'universal-trans-trade-dev.firebaseapp.com',
  projectId: 'universal-trans-trade-dev',
  storageBucket: 'universal-trans-trade-dev.appspot.com',
  messagingSenderId: '321517112426',
  appId: '1:321517112426:web:4f1a7abb03b51cc43d0e13',
});

export const auth = app.auth();
export default app;
