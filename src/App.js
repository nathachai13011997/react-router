import React from "react"
import ConditionalRendering from './content/ConditionalRendering'
import About from './content/About'
import Forms from './content/Forms'
import ListKeys from './content/ListKeys'
import Composition from './content/Composition'
import Inheritance from './content/Inheritance'
import LiftingStateUp from './content/LiftingStateUp/LiftingStateUp'
import UseEffectDamo2 from './content/UseEffectDamo2'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* exact คือมันจะบอกว่า ต้อง match ยังงี้ยังเดียวน่ะ http://localhost:3000/  ถึงจะ render */}
      {/* Switch  เมื่อมัน match กับ Route ตัวไหนแล้วมันจะ render Route นั้น ตัวอื่นๆ จะไม่สนใจมันจะไล่จากบนลงล่าง*/}
      {/*  */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Conditional_Rendering</Link>
            </li>
            <li>
              <NavLink to="/about"  >About</NavLink>
            </li>
            <li>
              <Link to="/Forms">Forms</Link>
            </li>
            <li>
              <Link to="/ListKeys">ListKeys</Link>
            </li>
            <li>
              <Link to="/Composition">Composition</Link>
            </li>
            <li>
              <Link to="/Inheritance">Inheritance</Link>
            </li>
            <li>
              <Link to="/LiftingStateUp">LiftingStateUp</Link>
            </li>
            <li>
              <Link to="/UseEffectDamo2">UseEffectDamo2</Link>
            </li>
          </ul>
        </nav>

        {/* <Navbar /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* exact ตือ */}
        <Switch>
          <Route path="/UseEffectDamo2">
            <UseEffectDamo2 />
          </Route>
          <Route path="/LiftingStateUp">
            <LiftingStateUp />
          </Route>
          <Route path="/Inheritance">
            <Inheritance title="Hi" />
          </Route>
          <Route path="/Composition">
            <Composition title="Hi" />
          </Route>
          <Route path="/ListKeys">
            <ListKeys />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Forms">
            <Forms />
          </Route>
          <Route path="/">
            <ConditionalRendering />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }