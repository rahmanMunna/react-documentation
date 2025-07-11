# 🪝 useNavigate
## 📌 What is useNavigate?
- It allows you to programmatically navigate (redirect) to another route inside a component — without using <Link> or <Navigate> components.
- conditionally navigate
- redirect users after form submission

## 🛠️ How to Use : 
### ✅ Basic Syntax:
```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Go to a new route
navigate("/about");

// With replace (does not save history)
navigate("/dashboard", { replace: true });

// Pass state
navigate("/profile", { state: { userId: 123 } });
```
### ✅ Full example :

```jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <h2>Home Page</h2>
      <button onClick={goToContact}>Go to Contact</button>
    </>
  );
};
```
