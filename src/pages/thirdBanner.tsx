import Button from "../components/button";
import { COLORS } from "../theme";

const ThirdBanner = () => {
  return (
    <div class="thirdBanner">
      <div class="titles">
        <h2 style={{ color: COLORS.primary, fontStyle: "italic" }}>
          ___ Latest works
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <h1 style={{ marginBottom: -10 }}>Products that we</h1>
          <h1>build for solving problems</h1>
        </div>
      </div>
      <div class="products">
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 80,
          paddingInline: 20,
          paddingBlock: 10
        }}
      >
        <Button title="VIEW ALL PROJECTS" style={null} />
        <p style={{ width: "50%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque
          mollitia architecto saepe eius eum est totam unde, harum eos veniam!
          Nisi vitae, ipsam iusto quod dicta nesciunt reprehenderit in?
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div class="products_container">
      <img
        src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt=""
        style={{ width: 400, height: 250 }}
      />
      <div>
        <h4 style={{ color: "#8E8E8E", marginBottom: 0, paddingBottom: 0 }}>
          First design - 06 JUNE 2022
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>E-commerce Website</h3>
          <h3 style={{ textDecoration: "underline", color: "#6AAAF6" }}>
            Full Details
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
