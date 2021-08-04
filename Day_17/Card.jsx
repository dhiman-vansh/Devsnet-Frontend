// import React from 'react'
import './index.css'
function Card() {
    return(
        <div className="container">
            <div className="card">
                <img src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=" alt="Pizza" />
                <h2>Pizza</h2>
                <h3>If you eat this,<br></br> then you will have 100 cal</h3>
            </div>
            <div className="card">
                <img src="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg" alt="Burger" />
                <h2>Burger</h2>
                <h3>If you eat this,<br></br> then you will have 50 cal</h3>
            </div>
            <div className="card">
                <img src="https://i0.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/108098914/coca-cola-soda-ice.jpg?fit=1024%2C750&ssl=1" alt="Coke" />
                <h2>Coke</h2>
                <h3>If you eat this,<br></br> then you will have 20 cal</h3>
            </div>
            <div className="card">
                <img src="https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies.jpg" alt="Fried Rice" />
                <h2>Fried Rice</h2>
                <h3>If you eat this,<br></br> then you will have 150 cal</h3>
            </div>
        </div>
    )
}

export default Card;