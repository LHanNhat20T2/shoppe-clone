import { ToastContainer } from 'react-toastify'
import './App.css'
import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()
  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
