import { ToastContainer } from 'react-toastify'
import './App.css'
import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()
  console.log(routeElements) // Kiểm tra giá trị routeElements
  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
