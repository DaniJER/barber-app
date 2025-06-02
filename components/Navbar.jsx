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
                color: "#fff",
                fontWeight: "bold",
              }}
              href="/"
            >
              Inicio
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
              href="./store"
            >
              Tienda
            </Link>
          </li>

          <li style={{ listStyle: "none" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
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
                color: "#fff",
                fontWeight: "bold",
              }}
              href="./log-in"
            >
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
