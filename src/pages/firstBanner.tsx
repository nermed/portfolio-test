import Button from "../components/button";
import { COLORS } from "../theme";

const FirstBanner = () => {
  return (
    <div className="banner-container">
      <div className="left-side">
        <div class="left-side-firstText">
          <p>___</p>
          <p style={{ fontSize: 18, fontStyle: "italic" }}>
            "We help people to reshape their business."
          </p>
        </div>
        <div class="left-side-secondText">
          <p style={{ fontSize: 60 }}>We are</p>
          <p style={{ fontSize: 40, color: COLORS.primary }}>
            innovating and fintech
          </p>
          <p style={{ fontSize: 60 }}>agency</p>
        </div>
        <div class="left-side-trirdText">
          <Button title="Let's Talk" style={null} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque
            mollitia architecto saepe eius eum est totam unde, harum eos veniam!
            Nisi vitae, ipsam iusto quod dicta nesciunt reprehenderit in?
          </p>
        </div>
      </div>
      <div className="right-side">
        <img
          class="img-banner"
          src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
      </div>
    </div>
  );
};

export default FirstBanner;
