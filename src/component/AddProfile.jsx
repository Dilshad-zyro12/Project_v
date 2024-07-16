// src/components/AddProfile.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddProfile = () => {
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [accNo, setAccNo] = useState('');
  const [ifscCode, setIFSCCode] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const navigate = useNavigate();
  const paymentTypes = ['NEFT', 'IMPS', 'RTGS'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { beneficiaryName, accNo, ifscCode, paymentMode };

    const existingEntries = JSON.parse(localStorage.getItem('profiles')) || [];
    const updatedEntries = [...existingEntries, formData];
    
    localStorage.setItem('profiles', JSON.stringify(updatedEntries));

   

    navigate('/dashboard');

    setBeneficiaryName('');
    setAccNo('');
    setIFSCCode('');
    setPaymentMode('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md lg:h-[415px] mt-10 lg:w-[450px] mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="Bname" className="block text-sm font-medium text-gray-700">
            Beneficiary Name
          </label>
          <input
            type="text"
            id="Bname"
            name="beneficiaryName"
            value={beneficiaryName}
            onChange={(e) => setBeneficiaryName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="accountNo" className="block text-sm font-medium text-gray-700">
            Account No
          </label>
          <input
            type="text"
            id="accountNo"
            name="Account_No"
            value={accNo}
            onChange={(e) => setAccNo(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="IFSCCode" className="block text-sm font-medium text-gray-700">
            IFSC Code
          </label>
          <input
            type="text"
            id="IFSCCode"
            name="IFSC_Code"
            value={ifscCode}
            onChange={(e) => setIFSCCode(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="payment-method"
            value={paymentMode}
            name="payment_method"
            onChange={(e) => setPaymentMode(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Payment Method</option>
            {paymentTypes.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
     
    </>
  );
};

export default AddProfile;
