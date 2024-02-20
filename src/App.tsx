// import CoverPhoto from "./CoverPhoto";
// import SetAvailability from "./componnent/SetAvailability.tsx";
import SheduleMeeting from "./componnent/SheduleMeeting.tsx";
import Footer from "./footer";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
        <Navbar />
        {/* <CoverPhoto/> */}
        {/* <SetAvailability></SetAvailability> */}
        <SheduleMeeting></SheduleMeeting>
        <Footer/>
    </div>
  );
}

export default App;
