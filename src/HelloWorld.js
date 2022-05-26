import React from 'react'

const name = "Emanuele"
const hello = "Hello, World"
 export class HelloWorld extends React.Component{
    render(){
       return <h1>{hello}</h1>
      //  return <h1>Hello,{name}</h1>
    }
}