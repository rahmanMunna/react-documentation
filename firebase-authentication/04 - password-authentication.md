## Note : goto firebase doc -> build -> authentication -> web -> getstarted , then follow their documentation.

# Implement The password authentication using firebase : 

## Step-1 : import `createUserWithEmailAndPassword` from firebase
```jsx
import { createUserWithEmailAndPassword } from "firebase/auth";
```
## Step-2 : import `auth` from firebase.config.js
```jsx
import auth from "../../firebase.config.js";
```
## call the api and pass 3 parameter ->  **`auth,email,password`** :
```jsx
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
                // Signed in 
                const user = userCredential.user; //create user  
                console.log("User created:", user);
                // You can redirect or show a success message here
            })
            .catch((error) => {
                console.log("Error:", error.message);
                // Handle error appropriately, e.g., show a message to the user
            })
```
# Details about the code : 
## 📌 createUserWithEmailAndPassword(auth, email, password) :
- 🔹 It's a function from Firebase Auth SDK.
- **`auth → your Firebase authentication instance`**
-  **`Your auth instance includes the API key and project info.`**
- email → user's email
- password → user's password
- **`🔹 Returns a Promise.`**
## ✅ .then((userCredential) => { ... }) :
- serCredential contains details like:
  - userCredential.user → user info object (UID, email, etc.)
---
## ❌ .catch((error) => { ... })
- Runs if there's an error during signup (e.g., weak password, email already in use).
---
## Summary : 

| Part                             | Purpose                           |
| -------------------------------- | --------------------------------- |
| `createUserWithEmailAndPassword` | Registers user with Firebase Auth |
| `auth`                           | Firebase auth instance            |
| `email`, `password`              | User credentials                  |
| `.then()`                        | Executes on success               |
| `.catch()`                       | Executes on failure               |

## 🧰 What is an SDK?
- Software Development Kit.

## 📦 What’s Inside an SDK?
- An SDK typically includes:
- APIs (pre-built functions you can call)
- Libraries (reusable code)
- Documentation (how to use it)
- Tools or utilities (for testing, building, etc.)

## When you install Firebase - > `You’re downloading the Firebase JavaScript SDK`.


# How does it work behind The scene : 
### 1. You call the function in your app:
```jsx
createUserWithEmailAndPassword(auth, "test@example.com", "123456")
// function comes from the Firebase Authentication SDK
//(`installed via npm install firebase)`)
```

### 2. SDK prepares a request to Firebase's Auth REST API - `POST request` : 
```jsx
POST https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY
```
-Your `auth instance` includes the `API key and project info.`
- With a request body:
```json
{
  "email": "test@example.com",
  "password": "123456",
  "returnSecureToken": true
}
```
### 3. Sends HTTPS request to Google Firebase backend
### 4. Firebase Auth Backend processes the request
- If valid:
  - Creates a new user in your Firebase project
  - Generates an ID token & refresh token

- If invalid:
- Returns an error like auth/email-already-in-use

### 5. SDK Receives Response
- On success:
  - You get a userCredential object
  - Contains user, uid, email, and authentication tokens
## 🛠 What the SDK Does:

| Task                       | SDK Handles?         |
| -------------------------- | -------------------- |
| Making the HTTP request    | ✅ Yes                |
| Passing API keys securely  | ✅ Yes                |
| Handling tokens & parsing  | ✅ Yes                |
| Validating email/password  | ✅ (Firebase backend) |
| Throwing meaningful errors | ✅ Yes                |


