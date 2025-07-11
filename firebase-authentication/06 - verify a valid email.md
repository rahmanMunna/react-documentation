## A user can use any email to sign up,
- so we need to verify a email,is that a valid
- TO do that :
```jsx
user.emailVarified
```
- use this properties
- this will return T/F
## While Signup : 
- sent a verification link to verify :
```jsx
sendEmailVerification(result.user)
  .then(() => {
    // Email verification sent!
    // ...
  });
```
