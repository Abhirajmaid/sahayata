import { Footer, Navbar } from "./components";
import { Donation, Events, Home, Page404, PageNotFound, SingleEvent, Success } from "./pages";
import "./styles/Global.css"
import "./styles/Media.css"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/event/:id" element={<SingleEvent />} />
        <Route path="/success" element={<Success />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
