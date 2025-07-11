# Implement Forget-Password using firebase authentication : 
### Key point : 
- When we click forget password
  - it doesn't trigger the onSubmit event on form
  - So, we can't get value like `e.target.value` ❌
- But to reset password , we need email to send reset link.
- To get the email from email field :
  - We can use `useRef()`
  - Or we can use `oncChange` event
 ## Code ↗️ :
```jsx
const emailRef = useRef(null);
<input type = "email" name = "email" ref= {emailRef}/>
```
- Attach eventHandler to forget password
### get email : 
```jsx
emailRef.current.value
```
