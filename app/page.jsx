import "./globals.css";

function HomePage() {
  return (
    <>
      <h1 className="site-name">Barber Bettel</h1>
      <button className="button-reserve">Reserva aquí</button>
      <img
        src="/img/barber-background.jpg"
        alt="Fondo de barberia"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          // marginTop: "-1.5vh",
        }}
      />
    </>
  );
}
export default HomePage;
