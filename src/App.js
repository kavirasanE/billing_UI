import Auth from "./auth/Auth";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ManageSubscription from "./pages/ManageSubscription";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscription" element={<ManageSubscription />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addsubscription" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
