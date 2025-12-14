
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Public, Object, ObjectAdd } from './page';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="/object" element={<Object />} />
          <Route path="/object/add" element={<ObjectAdd />} />
        </Route>
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
