import React from 'react';
import { createRoot } from 'react-dom/client'
import { jsx as _jsk } from 'react/jsx-runtime';
import App from './App.jsx'
function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}


// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }
const anotherUser="hello user"
const reactElement=React.createElement(
    'a',
    {href:'https://youtube.com',target:'_blank'},
    'click me to visit youtube',
    anotherUser
)

const anotherElement=(
    <a href="http://google.com" target='_blank'>Visit Google</a>
)
createRoot(document.getElementById('root')).render(
  
   
    <App/>
 
)
