import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Assets
import logo from "../../assets/logo1.svg";
import settingIcon from "../../assets/settings-icon.svg";
import contactIcon from "../../assets/contact-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";

function DopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define options and route map at the top level
  const options = ['Truck', 'Third Party Logistics', 'Drivers', 'Warehouse', 'Inbox'];
  
  const routeMap = {
    'Truck': '/truck',
    'Third Party Logistics': '/third-party-logistics',
    'Drivers': '/drivers',
    'Warehouse': '/warehouse',
    'Inbox': '/inbox'
  };

  // Get current active option based on path
  const getCurrentOption = () => {
    const path = location.pathname.split('/').pop();
    const currentOption = options.find(option => 
      routeMap[option].substring(1) === path
    );
    return currentOption || options[0];
  };

  const [activeOption, setActiveOption] = useState(getCurrentOption());

  const handleOptionClick = (option) => {
    setActiveOption(option);
    const path = `/dop${routeMap[option]}`;
    navigate(path);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />
        
        {/* Navigation Options */}
        <div className="flex space-x-4">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeOption === option
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <img src={settingIcon} alt="Settings" className="h-6 w-6 cursor-pointer" />
        <img src={contactIcon} alt="Contact" className="h-6 w-6 cursor-pointer" />
        <img src={profileIcon} alt="Profile" className="h-6 w-6 cursor-pointer" />
      </div>
    </nav>
  );
}

export default DopNav;