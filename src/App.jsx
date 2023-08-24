import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import OnlineHelp from "./components/onlinehelp/OnlineHelp";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import QueryPage from "./query/QueryPage";
import DetailPopup from "./components/detailpopup/DetailPopup";
import { Checkout } from "./checkout/Checkout";

function App() {
  return (
    <>
      <OnlineHelp />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <DetailPopup />
    </>
  );
}

export default App;
