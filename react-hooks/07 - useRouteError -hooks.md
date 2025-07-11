# 🛠️ useRouteError()
- React Router Error Handling Hook
---

## 📌 What is useRouteError() : 
- useRouteError() is a React Router hook that lets you `access error information` when a route throws an error.
- It's `used inside error boundary components` to display custom error messages.

## 🎯 Why Use It : 
- To gracefully handle errors in routing (e.g., 404, loader errors, thrown responses).
- To show a custom error page instead of a blank or broken UI.
---

## ⚙️ How to Use useRouteError() : 
### ✅ Step 1: Define an Error Element in the Route : 

```jsx
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"; 
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage /> // handles any route-level error
  }
]);
```
### ✅ Step 2: Use useRouteError() in the Error Page Component : 
```jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h2>Something went wrong 😢</h2>
      <p>{error.statusText || error.message}</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
```

## 🧾 What Does useRouteError() Return :
``js
{
  status: 404,
  statusText: "Not Found",
  message: "The page does not exist"
}
``
