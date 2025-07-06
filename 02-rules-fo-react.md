# Rules of JSX in React

JSX (JavaScript XML) allows us to write HTML-like code inside JavaScript. However, JSX has some strict rules that must be followed when writing components.

---

## 🧠 1. Return a Single Parent Element

```jsx
return {
  <div>
    //content
 </div>
}

```
-To return multiple elements from a compoent,wrap them with a single parent tag,then return the parent tag

✅ **Correct Example:**

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <button>Click Me</button>
    </div>
  );
}

```
❌ **Incorrect Example (Return Multiple Root Elements):**

```jsx
function MyComponent() {
  return (
    <h1>Hello</h1>
    <button>Click Me</button>
  );
}
```



