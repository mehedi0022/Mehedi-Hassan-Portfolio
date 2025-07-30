import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="bg-primary">
        <ToastContainer />
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="ml-0 md:ml-[100px] mx-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
