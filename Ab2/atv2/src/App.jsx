import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div className="container">
      <h1>Perfis de Usuários</h1>

      <ProfileCard
        nome="Ana Beatriz"
        idade={21}
        biografia="Estudante de Ciência da Computação na UFAL, apaixonada por desenvolvimento web front-end e design de interfaces."
      />

      <ProfileCard
        nome="Carlos Eduardo"
        idade={23}
        biografia="Desenvolvedor Júnior focado em JavaScript e React. Gosta de participar de projetos open source e maratonas de programação."
      />

      <ProfileCard
        nome="Mariana Silva"
        idade={20}
        biografia="Entusiasta de tecnologia e estudante de Sistemas de Informação. Atualmente estudando HTML, CSS e React."
      />
    </div>
  )
}

export default App

