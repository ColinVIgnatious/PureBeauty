import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const api = new WooCommerceRestApi({
    url: "https://wp.planetmedia.dev/wp-json/",
    consumerKey: "ck_c45cd7912a11e9fa03e285d3a8dfb1b0c99f4907",
    consumerSecret: "cs_d07978d12b137433a7c307645422eabffe9cb6ef",
    version: "wc/v3"
  });
  
  const woo=()=>{
  // List products
  api.get("products", {
    per_page: 20, // 20 products per page
  })
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data);
      console.log("Total of pages:", response.headers['x-wp-totalpages']);
      console.log("Total of items:", response.headers['x-wp-total']);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
  }