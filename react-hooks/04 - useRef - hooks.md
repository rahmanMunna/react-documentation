# 🪝 `useRef Hook`
## 📌 What is useRef? : 
- useRef is a React Hook that returns a ` mutable reference object.`
- That object has a `.current` property which you can use to:
  - Reference a DOM element
  - Store any mutable value that does not trigger a re-render

## Example : 
```jsx
<input  type="text" name="name" id="name" />
```
- We can access the dom element by using document object :
```jsx
const nameElement = document.getElementById('name');
```
- We can do the same thing using `useRef()` hook :
### 1. Fristly Create the refernce object using `useRef()` hook : 
```jsx
const nameRef = useRef();
```

### 2. Then Attach the reference object to the html element (useing `ref` attribute) : 
```jsx
<input ref={nameRef}  type="text" name="name" id="name" />
```

### 3. Then Access the element using current properties of the reference object (`nameRef.current`):
```jsx
nameRef.current // <input  type="text" name="name" id="name" />
```

### 📌 Syntax : 
```jsx
const ref = useRef(initialValue);
```
# 🛠 How to Use useRef
## ✅ 1. Referencing a DOM Element (like `document.getElementById()`).
```jsx
import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // access DOM element
    inputRef.current.value; // get the value of the input field 
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```
