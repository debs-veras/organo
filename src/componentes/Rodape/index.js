import "./Rodape.css";

const Rodape = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/imagens/fundo.png)" }}
    >
      <section>
        <ul>
          <li>
            <a href = "facebook.com" target = "_black">
              <img src = "/imagens/fb.png" alt = "logo facebook" />
            </a>
          </li>
          <li>
            <a href = "twitter.com" target = "_black">
              <img src = "/imagens/tw.png" alt = "logo twitter" />
            </a>
          </li>
          <li>
            <a href = "instagram.com" target = "_black">
              <img src = "/imagens/ig.png" alt = "logo instagram" />
            </a>
          </li>
        </ul>
      </section>

      <section className="footer-logo">
        <img src="imagens/logo.png" alt="logo da organo" />
        <section>Desenvolvido por Alura</section>
      </section>
    </footer>
  );
};

export default Rodape;
