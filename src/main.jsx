import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; //me faltaron los estilos

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
    
)
