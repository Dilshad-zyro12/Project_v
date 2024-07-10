
import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import SignInPage from './component/SignInPage';
import AddProfile from './component/AddProfile';
import LoginForm from './component/LoginForm/LoginForm';

function App() {
  

  return (
    <>
     
    <BrowserRouter>
    <div className='lg:flex '>

   
    <Sidebar />
      <Routes>
        <Route path='/' element={<LoginForm/>}/> 
        <Route path='/addprofile' element={<AddProfile/>}/> 
      </Routes>
     
 
      </div>

    </BrowserRouter>
    </>
  );
}

export default App;



{/*
  
  import {useState} from 'react'

function AddProfile() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const paymentMethods = ['Credit Card', 'Debit Card', 'PayPal'];
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(paymentMethod)
    }
  return (
  <>
  <div>
        <label htmlFor="payment-method">Payment Method: </label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          {paymentMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </div>
  
  </>
  )
}

export default AddProfile
  */}