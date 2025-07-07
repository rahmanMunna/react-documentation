# 🪝 useState Hooke
The React useState Hook allows us to track state (**add and manage state**) in a function component.
---

Before using `useState`, you must import it on the top of the component from React:

```jsx
import { useState } from "react";
```
🛠️ Syntax
```jsx
const [state, setState] = useState(initialValue);
```  
-state: the current state value --> This is immutable
-setState: a function to update the state --> As a state variable is immutable,so to change state we must call the setState function and pass the updated value:
## 🧠 Example:
```jsx
const [count, setCount] = useState(0);
```
## ❌ Wrong:
```jsx
count = count + 1;
```
## ✅ Correct:
```jsx
setCount(count+1);
```

-initialValue: the value used on the first render:
initial value can be any datatype.It can be an array,object,number,string.
