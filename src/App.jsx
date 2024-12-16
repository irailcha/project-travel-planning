import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
const Map=React.lazy(() => import('./components/Map/Map'));
const Main=React.lazy(() => import('./pages/Main/Main'));
const Explore=React.lazy(() => import('./pages/Explore/Explore'));
const Profile=React.lazy(() => import('./pages/Profile/Profile'));
const Photos=React.lazy(() => import('./pages/Photos/Photos'));


const App=()=>{
  return (
    <div className="page">
      <img className="airpods" src="../public/images/Airpods.png" alt="Airpods" />
      <img className="calendar" src="../public/images/Calendar.png" alt="Calendar" />
      <img className="camera" src="../public/images/Camera.png" alt="Camera" />
      <img className="cup" src="../public/images/Cup.png" alt="Cup" />
      <img className="glasses" src="../public/images/Glasses.png" alt="Glasses" />
      <img className="globe" src="../public/images/Globe.png" alt="Globe" />
      <img className="phone" src="../public/images/Phone.png" alt="Phone" />
      <img className="plant" src="../public/images/Plant.png" alt="Plant" />
      <img className="sign" src="../public/images/Sign.png" alt="Sign" />
      <img className="stone" src="../public/images/Stone.png" alt="Stone" />

       <div style={{ position: "relative", zIndex: 2 }}>
      <Routes>
<Route path="/" element={<AppBar />}>
<Route index element={<Main />}/>
<Route path="/explore" element={<Explore/>}/>
<Route path="/map" element={<Map/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/photos" element={<Photos/>}/>
</Route>
  </Routes>
  </div>
  </div>
  );
}

export default App;