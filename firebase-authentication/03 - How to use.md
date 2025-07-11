## Import `initializeApp` function from firebase : 
```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
```
## Create an app using getAuth function by passing you `firbaseConfig object` :
```jsx
const app = initializeApp(firebaseConfig);
```
## import getAuth :
```jsx
import { getAuth } from "firebase/auth";
```
## Create an auth using getAuth by passing app : 
```jsx
const auth = getAuth(app);
```
## Export the auth
