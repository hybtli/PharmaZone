import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DutyPharmacy from "./pages/DutyPharmacy/DutyPharmacy";
import useStyles from "./App.styles";
import MedicineContent from "./pages/MedicineContent/MedicineContent";
import { Footer, Navbar } from "./components";

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Navbar />

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/duty-pharmacy" element={<DutyPharmacy />} />

            <Route path="/medicine-content" element={<MedicineContent />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/*<Footer />*/}
    </section>
  );
}

export default App;
