# 🔗 `<NavLink>` 
- Active Route Styling in React Router.
---

## 📌 What is <NavLink>?
- `<NavLink>` is a special version of `<Link>` in React Router.
- **It adds an "active" class (or custom styling) to the link when the route matches the current URL.**

## 🎯 Why Use <NavLink>?
- To highlight the active route in a navigation bar.
- To show users which page they are currently on.

## 🛠 How to Use : 
```jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};
```
- `**When the current route is /about, the "About" link will automatically have an active class added.**`

## 🎨 Styling the Active Link : 
- By default, React Router adds a class named `active`.
```css
nav a.active{
  //style
}
```
## ✅ Example with Inline Style :
```css
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  })}
>
  About
</NavLink>
```

## 💡 What is isActive?
- It’s a boolean provided by React Router to tell if the current link matches the route.
- It allows conditional styling for the active route.


## ✅ Example of Generalize Style :
```
const linkClasses = ({ isActive }) =>
        `transition hover:text-yellow-300
        ${isActive ? "border-b-2 border-green-500 text-black" : "text-white"}`;

<NavLink to="/customerDashboard" className={linkClasses}>Shop</NavLink>
<NavLink to="/deals" className={linkClasses}>Deals</NavLink>
<NavLink to="/about" className={linkClasses}>About</NavLink>
<NavLink to="/contact" className={linkClasses}>Contact</NavLink>       
```
