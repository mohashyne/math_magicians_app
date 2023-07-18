import { BrowserRouter, Routes, Route , Link, NavLink } from 'react-router-dom';
import Home from './component/home';
import MyComponent from './component/calculator';
import Quote from './component/quotes';

function App() {
  return (
    <div>
      <MyComponent />
      <Quote />
    </div>
  );
}
export default App;
