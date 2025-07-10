# 📌 What is the Context API?
## is a feature in React that allows you to share state or data globally across components without passing props manually at every level (known as "prop drilling").
### ideal for managing global data like themes, user info, language preferences, or authentication status.

#❓ Why Use Context API?
- Without Context API:
```jsx
<App>
  <A>
    <B>
      <C>
        <D data={value} />
      </C>
    </B>
  </A>
</App>
```
## **You’d have to pass data from component A → B → C → D even if only D uses it. This is called prop drilling**

## ✅ With Context API, you can `avoid prop drilling and directly access data` in deeply nested components.

# 🛠 How to Use Context API

### Step 1: Create the Context:

```jsx
import { createContext } from 'react';

const MyContext = createContext();
```

### Step 2: Provide the Context (Wrap Your App) : 
```jsx
import React, { useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello World");

  return (
    <MyContext.Provider value={{ value, setValue }}> // we can any type of data - > an array,string ,object,function
      {children}
    </MyContext.Provider>
  );
};
```
## In your main app : 

```jsx
<MyProvider>
  <App />
</MyProvider>
```

## Step 3: Consume the Context (Any Child Component) : 
```jsx
import { useContext } from 'react';

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Updated!")}>Change</button>
    </div>
  );
};
```

## Provide multiple value : 
```jsx
import { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Munna", age: 22 });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
```

# 🕒 When to Use Context API?
- You need to share data globally (e.g., theme, auth, language).
- You want to avoid passing props manually through many layers.
- The same data is needed by many components at different levels.

## **🔴 Don’t use Context for every state. Use it for global/shared state, not local UI state.**

# Using with react - router

- in main.jsx :
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MyContext } from 'MyContextProvider.jsx';

//define routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Component></Component>
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext.Provider value={{ name: "Context API" }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  </React.StrictMode>
)
```

## Consume Context API data from ant child component : 

```jsx
import { useContext } from "react";
import { MyContext } from "MyContextProvider";

const data = useContext(MyContext); // { name: "Context API" }
```
