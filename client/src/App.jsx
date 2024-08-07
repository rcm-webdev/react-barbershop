import { Link, Outlet } from "react-router-dom";

//Create a global header for all pages on the site, and render the target of the clicked route as the body of the page.

const App = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/staff", label: "Staff" },
    { to: "/services", label: "Services" },
    { to: "/booking", label: "Booking" },
    { to: "/admin", label: "Admin" },
  ];
  return (
    <div>
      <header>
        <h1>Local Legendz Barbershop</h1>
        <nav className="flex flex-row gap-3">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="btn">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
