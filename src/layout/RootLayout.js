import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Math Magicians</h1>
          <NavLink to="/">Home |</NavLink>
          <NavLink to="calc-container">Calculator |</NavLink>
          <NavLink to="quote-container">Quote</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
