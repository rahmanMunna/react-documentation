## A form is a controlled component that handles user input through React state, not the DOM directly.
-  Have controlled input elements with full control over behavior.
## Controled Vs Uncontrolled component
-  Controlled : React controls the form via state (value and onChange)
-  Uncontrolled : Browser/DOM manages input values via refs or native form behavior.

# Create a Form :
```jsx
<form  action="">
                <h1>Form</h1>
                <table>
                    <tr>
                        <td>Name : </td>
                        <td>
                            <input ref={nameRef} type="text" name="name" id="name" />
                        </td>
                    </tr>
                    <tr>
                        <td>Email : </td>
                        <td>
                            <input type="email" name="email" id="email" />
                        </td>
                    </tr>
                    <tr>
                        <td>Password : </td>
                        <td>
                            <input type="password" name="password" id="password" />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="submit" />
                        </td>
                    </tr>
                </table>
 </form>
```



`**An Event object(e) is automatically generates when an form is submitted**`

- Attach an `**onSubmmit**` eventHandler to the form element :
```jsx
<form onSubmit={handleSubmit}  action="">
...
</form>
```

- Type of button must be `**submit**` type
```jsx
 <input type="submit" value="submit" />
 ```

# 🛠 Access the form value : 
## Way -1 (`Using event object`)

```jsx
const form = e.target; // e.target is the form element
//use value of the name attribute
const email = form.email.value; // <input type="password" name="password" id="password" /> --> name = email
const name = form.name.value;
const password = form.password.value; 
```
### `e.target = <form>...</form>`

## Way -2 (`using **FormData** Class`) : 
 ```jsx
const formData = new FormData(e.target);
const name = formData.get("name")
const email = formData.get("email")
const  formData.get("password")
```

# 🧠 More about FormData class : 
- FormData is a `built-in JavaScript class` (part of the Web API) provided by the browser.
## 🧠 What is FormData?
- FormData is a JavaScript class that allows you to easily construct a set of `key/value pairs` representing form fields and their values
```jsx
const formData = new FormData(formElement);
```
## **It automatically grabs all the <input>, <select>, <textarea>, etc., from the `form` that have a `name attribute`**
```html
<form id="myForm">
  <input name="username" value="Munna" />
  <input name="email" value="munna@email.com" />
</form>

```
```js
const form = document.getElementById("myForm");
const formData = new FormData(form);

console.log(formData.get("username")); // "Munna"
console.log(formData.get("email"));    // "munna@email.com"
```

### if we use submit button then event(e) objec will be generated. From e object we can get the e.target as the form element.
```jsx
//e.target = <form>..</form>
//const form = document.getElementById("myForm");
//both are same
```

- So we can pass the e.target as the constructor of `formData class`
- Then create an object of FormData class (`new FormData(e.target)`) and assign the reference to a variable
```jsx
const formData = new FormData(e.target); // formData is the instance 
```

## There has some common mehtods of `FormData` class : 
- formData.get(name)
- formData.set(name, val)
- formData.has(name) -> Checks if a field with that name exists

## We can use foreach loop to access all the input field value : 
```jsx

<form id="myForm">
  <input name="name" value="Munna" />
  <input name="email" value="munna@email.com" />
</form>

formData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//name: Munna
//email: munna@email.com
```

