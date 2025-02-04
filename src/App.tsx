import './App.css'
import GaleryComponents from './Components/GaleryComponents/GaleryComponents'
import PresentationComponent from './Components/presentationComponents/PresentationComponent'

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
