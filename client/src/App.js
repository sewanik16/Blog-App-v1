
import './App.css';
import BlogPage from './components/BlogPage';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ViewBlog from './components/ViewBlog';
import CreateBlog from './components/CreateBlog';

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path="/" element={<BlogPage/>}/>
          <Route path="/blog" element={<ViewBlog/>}/>
          <Route path="/create" element={<CreateBlog/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
