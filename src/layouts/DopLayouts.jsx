import { Outlet } from "react-router-dom"
import DopNav from "../components/Global/DopNavBar"

const DopLayouts = () => {
  return (
    <div className="dop-layout">
      <div className="fixed z-50 w-screen">
      <DopNav />
      </div>
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default DopLayouts