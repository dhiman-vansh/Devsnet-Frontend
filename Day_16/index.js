 import React from 'react';
 import ReactDOM from 'react-dom';
 import './Day_16.css'


 //  function Box() {
//     return <div className="box">
//  }

 function Index() {
   return(
      
      [...Array(42)].map((element, index) => {
         return  (<div className="box"> </div>);
      } )
      
   ); 
 }


 ReactDOM.render( <Index />,document.getElementById('root')
 );
