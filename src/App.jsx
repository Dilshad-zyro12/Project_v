import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import AddProfile from './component/AddProfile';
import FormLayout from './component/Form/FormLayout';
import SignInPage from './component/SignInPage';

import Dashboard from './component/Dashboard/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail === 'admin123@gmail.com' && storedPassword === '12345') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin123@gmail.com' && password === '12345') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Router>
      <div className={isAuthenticated ? "lg:grid grid-cols-[1fr_4fr] w-full" : "flex lg:flex"}>
        {isAuthenticated ? (
          <>
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/addprofile" element={<AddProfile />} />
                <Route path="/formlayout" element={<FormLayout />} />
                <Route path="/" element={<AddProfile />} /> 
                
                <Route path="/dashboard" element={<Dashboard />} /> 
                 
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<SignInPage onLogin={handleLogin} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
