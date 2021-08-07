function Item (props) {
    return (
        <div>
        {console.log(props.nm)}
        <img url= {props.ig} alt= "snacks" />
        <h2>{props.nm}</h2>
        <h3>If you eat this,<br></br> then you will have  calories</h3>
        </div>
    )
}

export default Item;