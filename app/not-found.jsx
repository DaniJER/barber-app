import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>Pagina no encontrada :(</p>
      <Link href="/">Volver</Link>
    </>
  );
}
