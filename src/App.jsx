import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RealTime from './components/RealTime';
import Testimonial from './components/Testimonial';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import SignInTD from './components/auth/truckerDrivers/SignInTD';
import SignUpTD from './components/auth/truckerDrivers/SignUpTD';
import OtpPageTD from './components/auth/truckerDrivers/OtpPageTD';
import SignUpDetailsTD from './components/auth/truckerDrivers/SignUpDetailsTD';
import SignUpDetailsP from './components/auth/postal/SignUpDetailsP';
import SignUpP from './components/auth/postal/SignUpP';
import SignInP from './components/auth/postal/SignInP';
import SignUpDetailsB from './components/auth/business/SignUpDetailsB';
import SignUpB from './components/auth/business/SignUpB';
import SignInB from './components/auth/business/SignInB';
import SignInCard from './components/auth/SignCard/SignInCard';
import SignUpCard from './components/auth/SignCard/SignUpCard';
import MISReport from './components/misReport/misReports';
import TopNav from './components/Global/topNav.jsx';
import TruckPage from './components/Post Department/pages/truckDetails.jsx';
import DriverList from "./components/Post Department/pages/driverList.jsx";
import LogisticsPage from './components/Post Department/pages/companyDetails.jsx';
import InboxPage from "./components/Post Department/pages/inboxPage.jsx";
import Warehouse from "./components/Post Department/pages/wareHouse.jsx";
import Soon from "./components/comingSoon.jsx";
import DriverDetailsPage from './components/Drivers/driverDetails.jsx';
import TruckReservation from "./components/Companies/pages/truckReservation.jsx";
import YourTruck from "./components/Drivers/pages/yourTruck.jsx";
import Analysis from "./components/Drivers/pages/surveryForm.jsx";


import DopLayouts from './layouts/DopLayouts.jsx';
import DriverLayout from "./layouts/DriverLayout.jsx"
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './index.css';

function App() {
  const [navOptions, setNavOptions] = useState(['Truck', 'Drivers', 'Third Party Logistics', 'Warehouse', 'Inbox']);

  const handleBussinessPage = () => {
    setNavOptions(['Track Your Truck', 'Truck Reservation']);
  };

  const handlePostOfficePage = () => {
    setNavOptions(['Truck', 'Drivers', 'Third Party Logistics', 'Warehouse', 'Inbox']);
  };

  const handleDriverPage = () => {
    setNavOptions(['Your Truck', 'Sentiment Analysis']);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Services />
          <HowItWorks />
          <RealTime />
          <Testimonial />
          <Demo />
          <MyFooter />
        </>
      )
    },
    // Auth routes
    {
      path: "/auth",
      children: [
        {
          path: "signincard",
          element: <SignInCard />
        },
        {
          path: "signupcard",
          element: <SignUpCard />
        },
        {
          path: "signintd",
          element: <SignInTD />
        },
        {
          path: "signuptd",
          element: <SignUpTD />
        },
        {
          path: "otppagetd",
          element: <OtpPageTD />
        },
        {
          path: "signupdetailstd",
          element: <SignUpDetailsTD />
        },
        {
          path: "signupp",
          element: <SignUpP />
        },
        {
          path: "signinp",
          element: <SignInP />
        },
        {
          path: "signupdetailsp",
          element: <SignUpDetailsP />
        },
        {
          path: "signupb",
          element: <SignUpB />
        },
        {
          path: "signinb",
          element: <SignInB />
        },
        {
          path: "signupdetailsb",
          element: <SignUpDetailsB />
        }
      ]
    },
    // Department of Posts (DOP) routes
    {
      path: "/dop",
      element: <DopLayouts />,
      children: [
        {
          path: "truck",
          element: <TruckPage />
        },
        {
          path: "drivers",
          element: <DriverList />
        },
        {
          path: "third-party-logistics",
          element: <LogisticsPage />
        },
        {
          path: "inbox",
          element: <InboxPage />
        },
        {
          path: "warehouse",
          element: <Warehouse />
        }
      ]
    },
    // Driver routes
    {
      path: "/driver",
      element: <DriverLayout />,
      children: [
        {
          path: "your-truck",
          element: <YourTruck />
        },
        {
          path: "analysis",
          element: <Analysis />
        }
      ]
    },
    // Business routes
    {
      path: "/business",
      children: [
        {
          path: "truck-reservation",
          element: <TruckReservation />
        }
      ]
    },
    // Miscellaneous routes
    {
      path: "/misreports",
      element: <MISReport />
    },
    {
      path: "/coming-soon",
      element: <Soon />
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;