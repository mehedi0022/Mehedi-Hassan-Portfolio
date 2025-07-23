import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-primary">
      <ToastContainer />
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main>
        <Home />
      </main>
      <footer className="ml-0 md:ml-[100px] mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
