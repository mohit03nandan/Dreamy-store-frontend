import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts,getProductsLowest,getProductsHeight } from "../api/api";

const List = (props) => {
  const navigate = useNavigate();

  const [fetchProduct, setfetchProduct] = useState([]);
  const [ListView, setListView] = useState("1");
  const [GridView, setGridView] = useState("0");

  const cardList = fetchProduct
    .filter(
      (card) =>
        props.pushshipping === 1 || card.freeShipping === props.pushshipping
    )
    .filter((card) =>
      props.pushsliderPrice > 0
        ? card.price > 0 && card.price <= props.pushsliderPrice
        : card.price > 0
    )
    .filter(
      (card) =>
        props.pushColor === "" ||
        props.pushColor === "All" ||
        card.colors === props.pushColor
    )
    .filter(
      (card) =>
        props.pushfilterCompanyClciked === "" ||
        props.pushfilterCompanyClciked === "All" ||
        card.company === props.pushfilterCompanyClciked
    )
    .filter(
      (card) =>
        props.pushfilterCategoryClciked === "" ||
        props.pushfilterCategoryClciked === "All" ||
        card.category === props.pushfilterCategoryClciked
    )
    .filter((card) => card.company.toLowerCase().includes(props.pushQuery))
    .map((card) => (
      <div
        key={card.id}
        class="col-4 mb-4"
        onClick={async () => {
          await props.pullDescriptionData({
            name: card.name,
            desc: card.desc,
            imgUrls: card.imgUrls,
            customerRevs: card.customerRevs,
            stars: card.stars,
            available: card.available,
            sku: card.sku,
            company: card.company,
            price: card.price,
          });

          await props.pullnavbar(card.name);

          navigate("about");
        }}
      >
        <div class="card">
          <img
            src={card.imgUrls}
            class="card-img-top"
            alt="img"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div class="card-body">
            <div class="d-flex bd-highlight mb-3">
              <div
                class="me-auto p-2 bd-highlight"
                style={{ fontFamily: "Century Gothic" }}
              >
                {card.name}
              </div>
              <div class="p-2 bd-highlight" style={{ color: "#3FFF00" }}>
                ${card.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  function toggleViewList() {
    props.pullViewfromList(ListView);
  }

  function toggleViewGrid() {
    props.pullViewfromList(GridView);
  }

  async function getProductsData() {
    try {
      const data = await getProducts();
      setfetchProduct(data);
    } catch (error) {

        alert("Error fetching products:", error)
    }
  }

  async function Highestprice(){
    try {
      const data = await getProductsHeight();
      setfetchProduct(data);
    } catch (error) {
      alert("Error fetching products:", error)
    }
  }

  async function lowestprice(){
    try {
      const data = await getProductsLowest();
      setfetchProduct(data);
    } catch (error) {
      alert("Error fetching products:", error)
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);




  return (
    <div>
      <div className="row">
        <div className="col">
          <div class="d-flex flex-row bd-highlight mb-3">
            <button class="btn btn-dark-outline" onClick={toggleViewList}>
              <div class="p-2 bd-highlight">
                <i class="fa-solid fa-list"></i>
              </div>
            </button>

            <button class="btn btn-dark-outline" onClick={toggleViewGrid}>
              <div class="p-2 bd-highlight">
                <i class="fa-brands fa-slack"></i>
              </div>
            </button>

            <div class="p-2 bd-highlight">
              {" "}
              <h5> {fetchProduct.length} Products found</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
        <div className="col">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight">Sort By</div>
            <div class="p-2 bd-highlight">Price {}</div>
            <div class="p-2 bd-highlight">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li class="dropdown-item" onClick={lowestprice} >Price (Lowest)</li>
                  <li class="dropdown-item"  onClick={Highestprice}>Price (Highest)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">{cardList}</div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
