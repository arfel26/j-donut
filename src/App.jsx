import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 cursor-default">
        <BrowserRouter basename="/j-donut/">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
