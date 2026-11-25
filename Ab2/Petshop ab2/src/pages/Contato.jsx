import { FaWhatsapp } from 'react-icons/fa'

function Contato() {
  return (
    <section className="secao">
      <h2>Contato</h2>
      <p className="texto">
        Fale diretamente com o PetShop do Totó pelo WhatsApp.
      </p>

      <a
        className="botao"
        href="https://wa.me/5582999107995"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp /> Chamar no WhatsApp
      </a>
    </section>
  )
}

export default Contato
