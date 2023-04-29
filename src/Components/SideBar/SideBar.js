import React, { useState } from "react";
import styles from "./SideBar.module.css";

const SideBar = (props) => {
  const [value, setValue] = useState(0);


const [freeshipping, setfreeshipping] = useState(1)

  function handleChange(event) {
    setValue(event.target.value);
    props.pullsliderprice(event.target.value)
  }


 function querySearch(e){
    props.pullquery(e.target.value)
 }

 function filterbuttonclicked(e){
   props.pullfilterCategoryClciked(e.target.value);
 }

 function filterCompanyClicked(e){
 props.pullfilterCompanyClciked(e.target.value)
 }

 function buttonColorClicked(e){
   props.pullColor(e.target.value)
 }

 function freeshippingclicked(){
  if(freeshipping === 0){
    setfreeshipping(1)
  }
  else if(freeshipping === 1){
    setfreeshipping(0)
  }
   props.pullshipping(freeshipping)
 }


 function clearallfilter(){
  window.location.reload();

 }

 
  return (
    <div>
      <div class="input-group mb-3 mt-1">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search"
          style={{ color: "grey", marginLeft: "20px" }}
          onChange={querySearch}

        />
      </div>

      <div class="list-group " style={{ marginLeft: "20px" }}>
        <button
          class="list-group-item list-group-item-action "
          disabled
          style={{ backgroundColor: " rgb(178, 228, 213)" }}
        >
          Category
        </button>
        <button class="list-group-item list-group-item-action " value="All"   onClick={filterbuttonclicked}  >
          All
        </button>
        <button class="list-group-item list-group-item-action" value="Sneakers"   onClick={filterbuttonclicked}>
          Sneakers
        </button>
        <button class="list-group-item list-group-item-action" value="Sports"   onClick={filterbuttonclicked}>
          Sports
        </button>
        <button class="list-group-item list-group-item-action" value="Loafer"   onClick={filterbuttonclicked}>
          Loafer
        </button>
        <button class="list-group-item list-group-item-action" value="Clog"  onClick={filterbuttonclicked}>
          Clog
        </button>
        <button class="list-group-item list-group-item-action" value="Boot"  onClick={filterbuttonclicked}>
          Boot
        </button>
        <button class="list-group-item list-group-item-action" value="Dress Shoe"  onClick={filterbuttonclicked}>
          Dress Shoe
        </button>
      </div>

      <div class="dropdown mt-2" style={{ marginLeft: "20px" }}>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Company
        </button>
        <ul class="dropdown-menu">
          <button class="dropdown-item" value="All" onClick={filterCompanyClicked}>All</button>
          <button class="dropdown-item"  value="Nike" onClick={filterCompanyClicked}>Nike</button>
          <button class="dropdown-item" value="Adidas" onClick={filterCompanyClicked}>Adidas</button>
          <button class="dropdown-item" value="Puma" onClick={filterCompanyClicked}> Puma</button>
          <button class="dropdown-item" value="Reebok" onClick={filterCompanyClicked}>Reebok</button>
          <button class="dropdown-item" value="Bata" onClick={filterCompanyClicked}>Bata</button>
        </ul>
      </div>
      <div class="mt-2" style={{ marginLeft: "22px" }}>
        <h5>colors</h5>

        <div className={styles.btnGroup}>
          <button
            type="button"
            value="All"
            onClick={buttonColorClicked}
            className={`${styles.btn} ${styles.btnCircle} ${styles.btndark}`}
          >
            All
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnCircle} ${styles.btnRed}`}
            value="Orange"
            onClick={buttonColorClicked}
          ></button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnCircle} ${styles.btnPink}`}
            value="Pink"
            onClick={buttonColorClicked}
          ></button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnCircle} ${styles.btnPurple}`}
            value="Violet"
            onClick={buttonColorClicked}
          ></button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnCircle} ${styles.btnBlue}`}
            value="Blue"
            onClick={buttonColorClicked}
          ></button>
        </div>
      </div>

      <div class="mt-2" style={{ marginLeft: "22px" }}>
        <h5>Price</h5>
        <div className="price-display">${value}</div>
        <input
          type="range"
          min="0"
          max="300"
          value={value}
          onChange={handleChange}
          className={styles.slider}
        />
      </div>

      <div
        class="d-flex align-items-center mt-2"
        style={{ marginLeft: "20px" }}
      >
        <label class="form-check-label mr-3" for="checkboxNoLabel">
          <h5>Free Shipping</h5>
        </label>
        <div class="form-check" style={{ marginLeft: "10px" }}>
          <input
            class="form-check-input "
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
            onClick={freeshippingclicked}
          />
        </div>
      </div>
      <div class="mt-2" style={{ marginLeft: "22px" }}>
        <button class="btn btn-danger"   onClick={clearallfilter}>Clear Filter</button>
      </div>
    </div>
  );
};

export default SideBar;
