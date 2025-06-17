import './App.css'
import Rotas from './routes/Routes'
import ContextProvider from './context/ContextProvider'

function App() {

  return (
    <>
        <ContextProvider>
            <Rotas/>
        </ContextProvider>
    </>
  )
}

export default App
