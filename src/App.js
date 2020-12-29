import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About  from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import Tools from "./components/Tools";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about' />
      <Route component={Post} path='/post' exact/>
      <Route component={SinglePost} path='/post/:slug' />
      <Route component={Project} path='/project' />
      <Route component={Tools} path='/tools' />
    </Switch>
    <Footer></Footer>
   </BrowserRouter> 

  )
}

export default App;
