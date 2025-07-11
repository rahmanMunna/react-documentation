# 🧭 `useLocation()` 
- provided by React Router.

## 📌 What is useLocation() : 
- useLocation() is a React Router hook that gives you access to the `current location object.`
- This object represents the current URL and contains helpful information like pathname, search, hash, and state.

## 🧠 Why Use useLocation() : 
- Read the current path `(pathname)`
- Access query parameters `(search)`
- Get data passed with `navigate(..., { state })`
- Re-render or act based on the current route or state

## 🛠 How to Use : 
```jsx
import { useLocation } from "react-router-dom";

const CurrentPage = () => {
  const location = useLocation();

  console.log(location);
  
  return (
    <>
      <p>Current path: {location.pathname}</p>
      <p>Query string: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <pre>{JSON.stringify(location.state)}</pre>
    </>
  );
};
```
| Property   | Description                             |
| ---------- | --------------------------------------- |
| `pathname` | Path of the current URL (`/products/5`) |
| `search`   | Query string (`?name=abc`)              |
| `hash`     | Hash string (`#section1`)               |
| `state`    | Optional state passed via navigation    |
| `key`      | Unique location key (used internally)   |
