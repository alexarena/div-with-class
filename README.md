## About
react-div-with-class is a [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html)* that returns a `div` element with whatever class you'd like. It can be used to aid in crafting much more readable JSX.

## By Example

Here's some JSX for a sidebar component:
```html
<div className="sidebar">
  <div className="sidebar-item">
    <div className="sidebar-item-title">
      Something
    </div>
    ...
  </div>  
  <div className="sidebar-item">
    <div className="sidebar-item-title">
      Something Else
    </div>
      ...
    </div>
</div>
```

While this code is technically fine, something like this would be much more readable:

```html
<Sidebar>
  <Item>
    <Title>Something</Title>
    ...
  </Item>
  <Item>
    <Title>Something Else</Title>
    ...
  </Item>
</Sidebar>
```

Of course, we could accomplish this by manually creating very simple React components named `Sidebar`,`Item` and `Title`.

That process is made trivial & speedy by using react-div-with-class.
We can generate those components with the following code:

```js
import divWithClass from 'react-div-with-class'

const Sidebar = divWithClass('sidebar')
const Item = divWithClass('sidebar-item')
const Title = divWithClass('sidebar-item-title')
```

react-div-with-class works like you'd hope it would. Any props passed to components it generates are passed through to the underlying `div` elements.

Class names are concatenated as you'd expect. So, following our previous example, the component:
```html
<Sidebar className="sidebar-collapsed" />
```
would be a `div` with the className `sidebar sidebar-collapsed`.

## Etc.
The code behind `divWithClass()` is just ~10 lines long - the primary purpose of this repo is to demonstrate how aliasing `div` elements can result in much easier to read markup.

That being said - feel free to use it in your projects. I use it in mine and has only a peer dependency of React.

Tests are done with Jest via `npm test`.

––

*&ast; I don't know if this technically qualifies as a HOC, since, while it returns a component, it doesn't take one.*
