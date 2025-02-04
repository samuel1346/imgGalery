import './App.css'
import GaleryComponents from './Components/GaleryComponents/GaleryComponents'
import PresentationComponent from './Components/presentationComponents/presentationComponent'

function App() {

  return (
    <>
      <nav>
        <PresentationComponent/>
      </nav>
      <section>
        <GaleryComponents/>
      </section>
    </>
  )
}

export default App
