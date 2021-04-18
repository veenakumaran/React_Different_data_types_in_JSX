import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//****************different type of datatypes in JSX  ******************************/
var strvariable = 'veena'            //variables
var numvariable = 10
var boolvarialbe = 'true'
var elem = <p>hi there.........welcome to my world</p>

var obj ={                      //objects
  name : 'veena',
  age :10,
}


var object = 100;
// var fruitdesc=
// {
//   red : 'apple',
//   yellow : 'mango'
// }

var myStyle = {   

  backgroundColor : 'lavender '
}

var fruits = ['apple', 'mango', 'grapes']    //array


let bookList =[                   //array object
    {title : 'C', author : 'Dennis Ritchie'},
    {title : 'C ++', author : 'Mark David'},
    {title : 'MBA', author : 'Veena Kumaran'},
    
  ]
  

ReactDOM.render(
  <div style ={myStyle}>
  {/* <h4>this is my string vairable : {strvariable}</h4>
  <h4>this is my number vairable : {numvariable}</h4>
  <h4>this is my boolean vairable : {boolvarialbe}</h4>
  <h4>this is my object  : {obj.name} is  {obj.age} years old  </h4> */}
<h4>{boolvarialbe}</h4>
  <h4>this is my array  : {fruits.map(fruit => <li>{fruit}</li>)} </h4>

{/* fruits.filter(fruit => condition ).map(fruit ==> <p>  </p>) */}

  <h4>after filtering the fruits array : containing 'man' in the name :{fruits.filter(fruit => fruit.includes('man')).map(fruitres => <li>{fruitres}</li>)}</h4>

  {/* <h4>this is my array object  : {bookList.map(book => <li>{book.title} by {book.author}</li>)} </h4>
  <h4>after filtering data : author of the book 'C' : {bookList.filter(result => result.title == 'C').map(filresult => <li>{filresult.author}</li>)}  </h4>
  <h4>after filtering data : author's who contain the letter e in their name : {bookList.filter(result => result.author.includes('e')).map(filresult => <li>{filresult.author}</li>)}  </h4> */}
 
  {elem}
  </div>,
  document.getElementById('root')
)

// ReactDOM.render(
//   elem,
//   document.getElementById('root')
// )




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
