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
-To `return multiple elements` from a compoent,`wrap` them `with a single parent` tag,then `return the parent tag`

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
## 🧠 2. Close All Tags

- JSX requires that **all tags be `explicitly closed`**, just like in XML.

- This applies to both standard HTML elements and custom components.

### ❌ Incorrect:

```jsx
<img>
<br>
<input>
```

### ✅ Correct:
```jsx
<img />
<br />
<input />
```

## 🧠 3. Must use `Pascal case`:
### ✅ Example:
- class -- ClassName
- onclick -- OnClick
- tabIndex -- TabIndex

## 🧠 4.To insert JavaScript expressions (like variables, function calls, or expressions) inside JSX, wrap them in curly braces {}.
You can use `{}` in:
- **Props** (like `src`, `alt`, `href`, etc.)
## ✅ Example:
```jsx
let avatar = "https://example.com/avatar.png";
let description = "User profile picture";

<img src={avatar} alt={description} />

```
## ✅ inline styles(CSS):
```jsx
const styles = {
  color: "blue",
  fontSize: "18px",
};

<p style={styles}>Styled text</p>
```
- or directly inline:
```jsx
<p style={{ color: "red", backgroundColor: "yellow" }}>
  Inline styled text
</p>
```
## ✅Conditional rendering
```jsx
const isLoggedIn = true;
{isLoggedIn && <LogoutButton />}
```




