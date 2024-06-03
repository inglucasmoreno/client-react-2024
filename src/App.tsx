import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import './App.css'
import { Toaster } from 'sonner'

function App() {
  return (
    <BrowserRouter>
      <Toaster className="" />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
