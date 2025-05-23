import Link from "next/link";
import "../style-components/navBar.css";

const Navbar = () => {
  return (
    <div className="style-navbar">
      <nav>
        <ul>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="./services-page"
            >
              Servicios
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="./aboutus"
            >
              Nosotros
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="./store"
            >
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
