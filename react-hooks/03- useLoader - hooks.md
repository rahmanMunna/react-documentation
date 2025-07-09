### 🪝 `useLoader` Hooks
📌 What is `useLoader()`?
- used inside a route component.
- It gives you access to the data returned from the route's loader function.

---
🔧 What is a loader?
- A loader is a function you define in your route configuration.
- It runs before the component is rendered, allowing you to load data ahead of time.
```
{
  path: '/example',
  loader: () => {
    return "Hello from loader!";
  },
  element: <MyComponent />
}

```

```
import { useLoaderData } from "react-router-dom";

const MyComponent = () => {
  const data = useLoaderData(); // return what loader function returns
  return <p>{data}</p>; // Output: Hello from loader!
};

```
## 🎯 Purpose of useLoaderData()
- To access data loaded by the loader function.
- Helps with data `***fetching before render***` (unlike ***useEffect which runs after render***).
- Improves performance and user experience (faster initial render).
  
❓ Why Use It?
- No need for useEffect + useState for data fetching.
- Centralizes data fetching logic in route configuration.

🕒 When to Use It?
- You need to fetch data before the component loads.
- You define a loader function in the route.
- You want to avoid using useEffect for initial data fetching.
- ***Mostly use when need to fetch data dynamically in dynamic route configuration***
- ***When we use loader function, we need `useLoader()` hooks to get the data what loader function has returned***.
  
## 🧪 Example :
### Route Setup:
```jsx
{
  path: '/user/:id',
  loader: async ({ params }) => {
    const res = await fetch(`/api/user/${params.id}`);
    return res.json();
  },
  element: <UserDetails />
}

```

### Make a button to navigate and load the data ***`Users Component`***

```jsx
const User = () => {
  
  return (
    <div>
      <Link to = "users/${user.id}">
          <button>Show Users Details</button>
      </Link>
    </div>
  );
};
```

### Component (***`UserDetails`***): 
```jsx
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
```


