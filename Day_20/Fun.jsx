// import React from 'react'
import Card from './Card'

function Fun(props) {
    return (
        <div className="container">
            <Card img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*" name="Pizza" cal="250"/>
            <Card img = "https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg" name="Burger" cal="70"/>
            <Card img = "https://media.vogue.in/wp-content/uploads/2020/11/Gobhi-Manchurian-recipe-chinese-starters-1920x1080.jpg" name="Manchurian" cal="120"/>
            <Card img = "https://1.bp.blogspot.com/-SlKuaxmVedc/WHaWgVeyYMI/AAAAAAAACVY/NZLYk4RE3p8bJB7CO9IysqgCg381k0KIgCLcB/s1600/French%2Bfries%2BRecipe%2B1.JPG" name="French Fries" cal="50"/>
            <Card img = "https://www.jessicagavin.com/wp-content/uploads/2018/09/fried-rice-8-1200.jpg" name="Fried Rice" cal="180"/>
            <Card img = "https://static.scientificamerican.com/blogs/cache/file/B626863E-4A2D-4ED2-955E755ED99D3110_source.jpg?w=590&h=800&2549C6F4-8AEA-475B-9F9ABBB4B458DE64" name="Coke" cal="190"/>
        </div>
    )
}

export default Fun ;