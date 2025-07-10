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
