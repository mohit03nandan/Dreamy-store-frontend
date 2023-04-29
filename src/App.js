import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import List from "./Components/List/List";
import Grid from "./Components/Grid/Grid";
import Description from "./Components/Description/Description";

const App = () => {
  const [view, setview] = useState("1");

  const [DecriptionData, setDecriptionData] = useState([]);

  const [searchQuery, setsearchQuery] = useState("");

  const [filterCategoryClciked, setfilterCategoryClciked] = useState("");

  const [filterCompanyClicked, setfilterCompanyClicked] = useState("");

  const [colorButtonClicked, setcolorButtonClicked] = useState("");

  const [sliderprice, setsliderprice] = useState(0);

  const [freeseshipping, setfreeseshipping] = useState(1);

  const [navbar, setnavbar] = useState("");

  const Pagination = (e) => {
    if (view === "1") {
      return (
        <List
          pullnavbar={setnavbar}
          pullViewfromList={setview}
          pullDescriptionData={setDecriptionData}
          pushQuery={searchQuery}
          pushfilterCategoryClciked={filterCategoryClciked}
          pushfilterCompanyClciked={filterCompanyClicked}
          pushColor={colorButtonClicked}
          pushsliderPrice={sliderprice}
          pushshipping={freeseshipping}
        />
      );
    } else if (view === "0") {
      return (
        <Grid
          pullnavbar={setnavbar}
          pullViewfromGrid={setview}
          pullDescriptionData={setDecriptionData}
          pushQuery={searchQuery}
          pushfilterCategoryClciked={filterCategoryClciked}
          pushfilterCompanyClciked={filterCompanyClicked}
          pushColor={colorButtonClicked}
          pushsliderPrice={sliderprice}
          pushshipping={freeseshipping}
        />
      );
    }
  };

  return (
    <BrowserRouter>
      <NavBar pushnavbar={navbar} />
      <div class="row">
        <div class="col-3 bg-light">
          <SideBar
            pullquery={setsearchQuery}
            pullfilterCategoryClciked={setfilterCategoryClciked}
            pullfilterCompanyClciked={setfilterCompanyClicked}
            pullColor={setcolorButtonClicked}
            pullsliderprice={setsliderprice}
            pullshipping={setfreeseshipping}
          />
        </div>
        <div class="col-9">
          <Routes>
            <Route path="/" element={<Pagination />} />
            <Route
              path="/about"
              element={<Description sendDatatoDescripion={DecriptionData} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
