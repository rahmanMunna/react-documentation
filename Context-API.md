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
    <MyContext.Provider value={{ value, setValue }}>
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

# 🕒 When to Use Context API?
- You need to share data globally (e.g., theme, auth, language).
- You want to avoid passing props manually through many layers.
- The same data is needed by many components at different levels.

## **🔴 Don’t use Context for every state. Use it for global/shared state, not local UI state.**
