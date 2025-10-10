import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div>
      <Navbar />

      {/* This renders the current page */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
