# 🪝 `useRef Hook`
## 📌 What is useRef? : 
- useRef is a React Hook that returns a ` mutable reference object.`
- That object has a `.current` property which you can use to:
  - Reference a DOM element
  - Store any mutable value that does not trigger a re-render
### 📌 Syntax : 
```jsx
const ref = useRef(initialValue);
``` 

## Example : 
```jsx
<input  type="text" name="name" id="name" />
```
- We can access the dom element by using document object :
```jsx
const nameElement = document.getElementById('name');
```
## 🎯 We can do the same thing using `useRef()` hook :
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
### Here is the complete Example : 

```jsx
import { useRef } from "react";

function MyForm() {
  const nameRef = useRef();

  const handleClick = () => {
    console.log(nameRef.current);       // 👉 full <input> element
    console.log(nameRef.current.value); // 👉 current input value
    nameRef.current.focus();            // 👉 focus the input
  };

  return (
    <>
      <input type="text" ref={nameRef} />
      <button onClick={handleClick}>Log Input</button>
    </>
  );
}
```

## ❌ Don't Use useRef For:
- Triggering UI updates (use useState instead).
- Replacing state that should cause a re-render.

# Renders on change?	❌ No
## ✅Example : 
### Storing a Mutable Value (not for rendering) : 
```jsx
function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Count:", countRef.current);
  };

  return <button onClick={increment}>Click Me</button>;
}
```
## **`The value is preserved between renders but won't trigger re-render when updated.`**


