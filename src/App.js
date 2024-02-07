
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ManageSubscription from "./pages/ManageSubscription";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/subscription" element={ <ManageSubscription/>}></Route>
        <Route path="/users" element={ <Users/>}></Route>
        <Route path="/addsubscription" element={ <Profile/>}></Route>
      </Route>
    </Routes>
    <Footer/>

    </BrowserRouter>
    
  )
}