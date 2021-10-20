import 'react-bootstrap';
import { Link } from 'react-router-dom'
import "./Menu.css"
import { Card, Button} from 'react-bootstrap'
export default function Home() {
    return(
        <>
<div className="homecont">
            <span className='borderw'>
            <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src="https://github.com/greatmatescu/greatmates.github.io/blob/main/static/sample.jpg?raw=true" />
  <Card.Body>
    <Card.Title>2020 Great Mates</Card.Title>
    <Card.Text>
      Here you can explore the content made for 2020 mates
    </Card.Text>
    <Button style={{backgroundColor:"#18263f"}}>
        <Link className="logob" to='/first'>Click me to go
        </Link>
        </Button>
  </Card.Body>
</Card>
            </span>
            <span className='borderw'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://github.com/greatmatescu/greatmates.github.io/blob/main/static/sample.jpg?raw=true" />
  <Card.Body>
    <Card.Title>2021 Great Mates</Card.Title>
    <Card.Text>
      Here you can explore the content made for 2021 mates
    </Card.Text>
    <Button style={{backgroundColor:"#18263f"}}>
        <Link className="logob" to="/second">Click me to go</Link>
        </Button>
  </Card.Body>
</Card>
            </span>
        </div>
        </>
    )
}