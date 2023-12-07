import './App.css';
import {
  createBrowserRouter,
  Link,
} from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default App;
