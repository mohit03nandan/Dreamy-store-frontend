import axios from "axios";

export async function getProducts(){
    try {
      const reqUrl = "http://localhost:3001/products/getproduct";
      const result = await axios.get(reqUrl);
      if(result.data) {
          return result.data;
      }
    } catch (error) {
      alert("Error fetching products:", error)
    }
  }
  

  export async function getProductsLowest(){
    try {
      const reqUrl = "http://localhost:3001/products/getproductLowest";
      const result = await axios.get(reqUrl);
      if(result.data) {
          return result.data;
      }
    } catch (error) {
      alert("Error fetching products:", error)
    }
  }

  export async function getProductsHeight(){
    try {
      const reqUrl = "http://localhost:3001/products/getproductHeighest";
      const result = await axios.get(reqUrl);
      if(result.data) {
          return result.data;
      }
    } catch (error) {
      alert("Error fetching products:", error)
    }
  }
  