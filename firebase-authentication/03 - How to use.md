## Step - 1 : Import `initializeApp` function from firebase : 
```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
```
## Step - 2 : Create an app using getAuth function by passing you `firbaseConfig object` :
```jsx
const app = initializeApp(firebaseConfig);
```
## Step - 3 : import getAuth :
```jsx
import { getAuth } from "firebase/auth";
```
## Step - 4 : Create an auth using getAuth by passing app : 
```jsx
const auth = getAuth(app);
```
## Step - 5 : `Export the auth` ,because we need it in every api call :
```jsx
export default auth;
```
# Import the `auth` where you call the api and pass the auth .
