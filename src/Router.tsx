import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Component/Admin'
import MotorComponent from './Component/Folders/Motor'
import CaravanComponent from './Component/Folders/Caravan'
import TuningComponent from './Component/Folders/Tuning'
import UsedComponent from './Component/Folders/Used'
import CampingComponent from './Component/Folders/Camping'



const RouterComponent = () => {
  return (
    <Routes>
      {/* <Route
          path="/motor"
          element={<Admin datas={Campcar.Maindatas} />}
        /> */}
{/* <Route path="/"element={<Admin />} />  */}
 {/* <Route path="/motor"element={<MotorComponent />} /> */}
{/* <Route path="/caravan"element={<CaravanComponent />} />
<Route path="/tuning"element={<TuningComponent />} />
<Route path="/used"element={<UsedComponent />} />
<Route path="/camping"element={<CampingComponent />} /> */}





    </Routes>
  )
}

export default RouterComponent