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

📥 Purpose of `useLoader()`
- We can extract the parameter from a request link by using `useParams hook`

---
🛠 How useParams() Works
- It returns an `object` containing the URL parameters defined in your route path.

---
🎯 Purpose of useParams():
- `Access dynamic segments` of the URL inside a component.
### ✅ Examples:

- URL : /products/id=1&&name=abc
- define dynamic route : 
- path : '/products/:id'
- <Route path="/products/:id" element={<ProductDetails />} />
- Here, :id is the dynamic segment of the route.
# Now we can extract ('id=1&&name=abc') from the url using `useParams hooks`
---

### ✅ Code:
```jsx
import { useParams } from "react-router-dom";

//URL : /products/id=1&&name=abc
//path : '/products/:id'

const parametersObj = useParams();
// parametersObj = {id : 'id=1&&name=abc'} // here we have id properties,bcz we define (/:id) in route path.
const parameters = parametersObj.id;

```
- If your route is /products/:id, then useParams() will return { id: '...' }.
- It only extracts path parameters, not query strings (?key=value). For that, use useSearchParams().
---

## ✅ Here is an full example use of using `useParams` hooks` :

### - Define a dynamic route in `Routes.jsx`
```Routes.jsx
{
  path: '/drinks/:id',
  element:<Show_Drinks_Details></Show_Drinks_Details>
},
```
### - Create a button to navigate to the route dynamically - in `Drinks.jsx`
```Drink.jsx
<Link to={`/drinks/${drink.id}`}> //asume drink is an object ,id = 2
  <button>Show Details</button> 
</Link>
```
### - In `Show_Drinks_Details.jsx` use useParams() hooks to access the parameters in the URL.
```Show_Drinks_Details.jsx
import { useParams } from "react-router-dom";

const Show_Drinks_Details = () => {
    const paramObj = useParams(); // {id : '2'} 
    const drinkId = paramObj.id;
    return (
      //code  
    );
};

export default Show_Drinks_Details;
```



