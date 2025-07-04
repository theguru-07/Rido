import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rider Pages
import Home from "./pages/rider/Home";
import Login from "./pages/rider/Login";
import Signup from "./pages/rider/Signup";
import BookRide from "./pages/rider/BookRide";
import RideStatus from "./pages/rider/RideStatus";
import RideHistory from "./pages/rider/RideHistory";
import Profile from "./pages/rider/Profile";

// Driver Pages
import DriverLogin from "./pages/driver/Login";
import DriverSignup from "./pages/driver/Signup";
import DriverDashboard from "./pages/driver/Dashboard";
import CurrentRide from "./pages/driver/CurrentRide";
import DriverProfile from "./pages/driver/Profile";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Drivers from "./pages/admin/Drivers";
import Rides from "./pages/admin/Rides";
import Payments from "./pages/admin/Payments";

// Common
import Support from "./pages/Support";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>

        {/* Rider */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book" element={<BookRide />} />
        <Route path="/ride-status" element={<RideStatus />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/profile" element={<Profile />} />

        {/* Driver */}
        <Route path="/driver/login" element={<DriverLogin />} />
        <Route path="/driver/signup" element={<DriverSignup />} />
        <Route path="/driver/dashboard" element={<DriverDashboard />} />
        <Route path="/driver/ride" element={<CurrentRide />} />
        <Route path="/driver/profile" element={<DriverProfile />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/drivers" element={<Drivers />} />
        <Route path="/admin/rides" element={<Rides />} />
        <Route path="/admin/payments" element={<Payments />} />

        {/* Others */}
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
