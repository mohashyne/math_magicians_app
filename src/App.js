import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// components / pages
import Home from './component/home';
import MyComponent from './component/calculator';
import Quote from './component/quotes';

// layouts
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="calc-container" element={<MyComponent />} />
      <Route path="quote-container" element={<Quote />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
