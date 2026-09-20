import ServiceCard from './ServiceCard'
import banho from '../assets/banho.jpg'
import consulta from '../assets/consulta.jpg'
import hospedagem from '../assets/hospedagem.jpg'

function Servicos() {
  return (
    <section id="servicos" className="secao">
      <h2>Nossos serviços</h2>
      <div className="cards">
        <ServiceCard
          imagem={"https://cdn-hipkdab.nitrocdn.com/zPcDBoPvgkUnKxknnzxjjOkKDtWMnsuz/assets/images/optimized/rev-e2d251d/www.hospitalvetitaquera.com.br/wp-content/uploads/2020/07/estetica.png"}
          titulo="Banho e tosa"
          descricao="Banho, tosa e cuidados de higiene para o seu pet."
          preco="A partir de R$ 50"
        />
        <ServiceCard
          imagem="https://media.istockphoto.com/id/1144737661/pt/foto/cat-doctor-with-medical-supplies.jpg?s=170667a&w=0&k=20&c=aoQ-Htfqd8o7GRXKqtALXI70Iaym3skvRDSU0LD5s4Y="
          titulo="Consulta veterinária"
          descricao="Atendimento com veterinário para cães e gatos."
          preco="A partir de R$ 80"
        />
        <ServiceCard
          imagem={"https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_cachorro-com-bandeja-de-comida3.jpg"}
          titulo="Hospedagem"
          descricao="Seu pet bem cuidado enquanto você viaja."
          preco="R$ 40 por dia"
        />
      </div>
    </section>
  )
}

export default Servicos
