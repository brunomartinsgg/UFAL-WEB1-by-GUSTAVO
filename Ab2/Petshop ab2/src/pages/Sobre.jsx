import { useState } from 'react'
import { FaHeart, FaShieldAlt, FaUserMd, FaQuestionCircle } from 'react-icons/fa'

function Sobre() {
  const [mostrarCuriosidades, setMostrarCuriosidades] = useState(false)

  return (
    <section id="sobre" className="secao fundo-claro">
      <h2>Sobre nós</h2>
      <p className="texto">
        O PetShop do Totó cuida do seu pet com carinho. Aqui você encontra banho e tosa,
        consulta veterinária e hospedagem em um só lugar, sem precisar esperar resposta em
        redes sociais para consultar preços e horários.
      </p>

      <div className="cards sobre-cards">
        <div className="card">
          <FaHeart className="icone-destaque" />
          <h3>Cuidado com Amor</h3>
          <p>Atendimento humanizado e ambiente preparado para reduzir o estresse do seu pet.</p>
        </div>

        <div className="card">
          <FaUserMd className="icone-destaque" />
          <h3>Equipe Qualificada</h3>
          <p>Profissionais experientes em estética animal e medicina veterinária.</p>
        </div>

        <div className="card">
          <FaShieldAlt className="icone-destaque" />
          <h3>Segurança e Higiene</h3>
          <p>Equipamentos higienizados e produtos dermatologicamente testados.</p>
        </div>
      </div>

      <div className="bloco-extra">
        <button
          type="button"
          className="botao-secundario"
          onClick={() => setMostrarCuriosidades(!mostrarCuriosidades)}
        >
          <FaQuestionCircle />{' '}
          {mostrarCuriosidades ? 'Ocultar Horários de Funcionamento' : 'Ver Horários de Funcionamento'}
        </button>

        {mostrarCuriosidades && (
          <div className="caixa-horarios">
            <p>
              <strong>Segunda a Sexta:</strong> 08h00 às 18h00
            </p>
            <p>
              <strong>Sábado:</strong> 08h00 às 13h00
            </p>
            <p>
              <strong>Endereço:</strong> Penedo - AL
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Sobre
