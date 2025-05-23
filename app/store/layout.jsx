import Link from "next/link";

export const metadata = {
  title: "Tienda",
};

const TiendaLayout = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <p>Producto1</p>
        </li>
        <li>
          <p>Producto2</p>
        </li>
        <li>
          <Link href="/store/categories">Categorias</Link>
        </li>
      </ul>

      {children}
    </>
  );
};

export default TiendaLayout;
