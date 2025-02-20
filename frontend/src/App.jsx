import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/Global/topNav.jsx';
import TruckPage from './components/Post Department/pages/truckDetails.jsx';
import DriverList from "./components/Post Department/pages/driverList.jsx";
import LogisticsPage from './components/Post Department/pages/companyDetails.jsx';
import InboxPage from "./components/Post Department/pages/inboxPage.jsx"


import Soon from "./components/comingSoon.jsx"



// import WarehousePage from './pages/WarehousePage';
// import InboxPage from './pages/InboxPage';

import DriverDetailsPage from './components/Drivers/driverDetails.jsx';



// 3pl Companies

import TrackTruck from "./components/Companies/pages/trackTruck.jsx"
import TruckReservation from "./components/Companies/pages/truckReservation.jsx"



// driver Dashboard
import YourTruck from "./components/Drivers/pages/yourTruck.jsx"
import Analysis from "./components/Drivers/pages/surveryForm.jsx"






const navOptions = ['Truck', 'Drivers', 'Third Party Logistics', 'Warehouse', 'Inbox'];
// const navOptions = ['Track Your Truck', 'Truck Reservation'];
// const navOptions = ['Your Truck', 'Sentiment Analysis'];




function App() {
  return (
    <Router>
      <TopNav options={navOptions} />
      <Routes>


        {/* post department */}
        <Route path="/truck" element={<TruckPage />} />

        <Route path="/third-party-logistics" element={<LogisticsPage />} />
  
        <Route path="/drivers" element={<DriverList />} />

        <Route path="/inbox" element={<InboxPage />} />

        <Route path="/coming-soon" element={<Soon />} /> 

        {/* <Route path="/warehouse" element={<WarehousePage />} />





        {/* 3pl Companies */}

        <Route path="/track-your-truck" element={<TrackTruck />} />
        <Route path="/truck-reservation" element={<TruckReservation />} />


        {/* Truck Drivers */}

        <Route path="/your-truck" element={<YourTruck />} />
        <Route path="/analysis" element={<Analysis />} />


      </Routes>
    </Router>
  );
}

export default App;
