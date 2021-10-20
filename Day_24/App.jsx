import Menu from './comp/Menu'
import First from './comp/First'
import Home from './comp/Home'
import Second from './comp/Second'
import { Route, Switch } from "react-router"

function App() {
  return (
    <>
    <Menu />
    <Switch >
      <Route  path="/first" component={First} ></Route>
      <Route path="/second" component={Second} ></Route>
      <Route path="/home" component={Home} ></Route>
    </Switch>
    </>
  );
}

export default App;
