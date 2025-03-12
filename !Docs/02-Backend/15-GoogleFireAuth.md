# Google FireAuth

One of the more difficult things about securing an application is making sure you have correct authentication. What if you want to be able to have someone log in through Google, but don't really need any more information than that? Google FireAuth can help immensely with that.

## Pros

- Leverages google's security for easy login
- Includes more than just Google login (Facebook, Github, etc.) with a few extra steps
- Reduces dev time for authentication
- Doesn't need a backend for any authentication.

## Cons

- Requires a user to have an account with one of the providers you choose
- Doesn't easily allow for collecting other information when a user signs up / signs in

## How to do it

It is actually quite simple to allow login via google. The steps are very straight forward up until the actual implementation, and even then, it's not too difficult.

1. Create an application through the [Google Firebase](https://firebase.google.com) console
2. Navigate to the project you have created
3. Click on the Authentication link on the right
4. Under the `Sign-in method` tab, activate Google (and others, following their steps if desired)
5. Add any authorized domains. Localhost is added by default for development, but if you plan on having the site hosted some place, you'll want to add that URL as well.
6. Set up any templates if you are using email verification under the `Templates` tab
7. Implement the code needed in your front end application. For the most part, you just copy-paste the code that Google gives you. A good structure to follow is Firebase's example: [Firebase Docs](https://firebase.google.com/docs/web/setup)

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed in:", result.user);
    } catch (error) {
        console.error("Error signing in:", error);
    }
};  
```