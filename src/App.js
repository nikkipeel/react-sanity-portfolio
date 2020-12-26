import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About  from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
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
      <Route component={SinglePost} path='/post/:slug' exact/>
      <Route component={Post} path='/post' exact/>
      <Route component={Project} path='/project' />
    </Switch>
    <Footer></Footer>
   </BrowserRouter> 

  )
}

export default App;
