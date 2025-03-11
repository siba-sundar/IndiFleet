import { Outlet } from "react-router-dom"
import DriverNav from "../components/Global/DriverNavBar"

const DopLayouts = () => {
  return (
    <div className="dop-layout">
      <div className="fixed z-40 w-screen bg-white">
        <DriverNav />
      </div>
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default DopLayouts