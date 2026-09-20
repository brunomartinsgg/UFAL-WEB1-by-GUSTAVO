import './App.css'
import Header from './components/Header'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
