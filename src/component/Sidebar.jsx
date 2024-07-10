import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from 'react-icons/rx'; 
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { SiGoogleforms } from "react-icons/si";
import { TbTable } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi2";
import { LiaElementor } from "react-icons/lia";
import { TbBrandOauth } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
const Sidebar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [uiElementsOpen, setUiElementsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleUiElements = () => {
    setUiElementsOpen(!uiElementsOpen);
  };

  const toggleAuthElements = () => {
    setAuthOpen(!authOpen);
  };

  const toggleForms = () => {
    setFormOpen(!formOpen);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <>
      <div className="flex justify-end m-3 text-[30px] lg:hidden mb-4 text-gray-700">
        {!isSidebarOpen && <GiHamburgerMenu onClick={toggleSidebar} />}
      </div>
      <div className={`z-20 fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out`} ref={menuRef}>
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            Sidebar Menu
          </h1>
          <div className="block lg:hidden text-gray-400">
            {isSidebarOpen && <ImCross onClick={toggleSidebar} />}
          </div>
        </div>
        <nav className="flex-1 p-2">
          <h1 className="text-lg font-bold">Menu</h1>
          <ul>
            <li className="mb-2" onClick={toggleSubmenu}>
              <div className="flex items-center justify-between w-full rounded hover:bg-gray-700 focus:outline-none">
                <div className="flex items-center text-left p-2">
                  <RxDashboard className="mr-2" />
                  <button className="" onClick={toggleSubmenu}>
                    Dashboard
                  </button>
                </div>
                {submenuOpen ? <IoIosArrowUp className="mr-4" /> : <IoIosArrowDown className="mr-4" />}
              </div>
              {submenuOpen && (
                <ul className="ml-4 mt-2">
                  <li className="mb-1">
                    <a href="#" className="block p-2 rounded hover:bg-gray-700">eCommerce</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <FaRegCalendarAlt className="mr-2" />
                <Link to="/calendar">Calendar</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <AiOutlineUser className="mr-2" />
                <Link to="/profile">Profile</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <FiUsers className="mr-2" />
                <Link to="/addprofile">Add Account</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <FiUsers className="mr-2" />
                <Link to="/accountlist">Account List</Link>
              </div>
            </li>
            <li className="mb-2" onClick={toggleForms}>
              <div className="flex items-center justify-between w-full rounded hover:bg-gray-700 focus:outline-none">
                <div className="flex items-center text-left p-2">
                  <SiGoogleforms className="mr-2" />
                  <button>
                    Forms
                  </button>
                </div>
                {formOpen ? <IoIosArrowUp className="mr-4" /> : <IoIosArrowDown className="mr-4" />}
              </div>
              {formOpen && (
                <ul className="ml-4 mt-2">
                  <li className="mb-1">
                    <Link to='/formelement' className="block p-2 rounded hover:bg-gray-700">Forms Element</Link>
                  </li>
                  <li className="mb-1">
                    <Link to='/formlayout' className="block p-2 rounded hover:bg-gray-700">Forms Layout</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <TbTable className="mr-2" />
                <Link to="/tables">Tables</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <IoSettings className="mr-2" />
                <Link to="/settings">Settings</Link>
              </div>
            </li>
          </ul>
        </nav>
        <nav className="flex-1 p-2">
          <h1 className="text-lg font-bold">Others</h1>
          <ul>
            <li className="mb-2">
              <div className="flex items-center w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none">
                <HiOutlineChartPie className="mr-2" />
                <Link to="/chart">Chart</Link>
              </div>
            </li>
            <li className="mb-2" onClick={toggleUiElements}>
              <div className="flex items-center justify-between  w-full  rounded hover:bg-gray-700 focus:outline-none">
                <div className="flex items-center text-left p-2 ">
                  <LiaElementor className="mr-2" />
                  <button>
                    UI Elements
                  </button>
                </div>
                {uiElementsOpen ? <IoIosArrowUp className="mr-4" /> : <IoIosArrowDown className="mr-4" />}
              </div>
              {uiElementsOpen && (
                <ul className="ml-4 mt-2">
                  <li className="mb-1">
                    <Link to="/alerts" className="block p-2 rounded hover:bg-gray-700">Alerts</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/buttons" className="block p-2 rounded hover:bg-gray-700">Buttons</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-2" onClick={toggleAuthElements}>
              <div className="flex items-center justify-between  w-full rounded hover:bg-gray-700 focus:outline-none">
                <div className="flex items-center text-left p-2 ">
                  <TbBrandOauth className="mr-2" />
                  <button>
                    Authentication
                  </button>
                </div>
                {authOpen ? <IoIosArrowUp className="mr-4" /> : <IoIosArrowDown className="mr-4" />}
              </div>
              {authOpen && (
                <ul className="ml-4 mt-2">
                  <li className="mb-1">
                    <Link to="/" className="block p-2 rounded hover:bg-gray-700">Sign In</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="/signup" className="block p-2 rounded hover:bg-gray-700">Sign Up</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
