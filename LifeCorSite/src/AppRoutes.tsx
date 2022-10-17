import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing_Page from "./pages/Landing_Page";
import { Angioplasty } from "./pages/Angioplasty";
import { Catheterization } from "./pages/Catheterization";
import { ArteriographyCerebral } from "./pages/Arteriography/cerebral";
import { ArteriographyThoracicAndAbdominal } from "./pages/Arteriography/toraxAndAbdo";
import { ArteriographyOfParts } from "./pages/Arteriography/limb";
import { CarotidAndVertebral } from "./pages/Arteriography/carotidAndVertebrais";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/catheterization" element={<Catheterization />} />
        <Route path="/angioplasty" element={<Angioplasty />} />
        <Route
          path="/arteriography/cerebral"
          element={<ArteriographyCerebral />}
        />
        <Route path="/arteriography/limb" element={<ArteriographyOfParts />} />
        <Route
          path="/arteriography/thoracic&abdominal"
          element={<ArteriographyThoracicAndAbdominal />}
        />
        <Route
          path="/arteriography/carotidAndVertebral"
          element={<CarotidAndVertebral />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
