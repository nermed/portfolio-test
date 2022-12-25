import Button from "../components/button";
import { COLORS } from "../theme";

const FourBanner = () => {
  return (
    <div class="fourBanner">
      <div class="titles">
        <h1 style={{ marginBottom: -20 }}>We are a team of great designers</h1>
        <h1 style={{ textAlign: "end" }}>problem solvers, and passionate.</h1>
      </div>
      <div class="fourBannerContainer">
        <div class="fourBannerContainer_firstDiv">
          <h2 style={{ color: COLORS.primary, fontStyle: "italic" }}>
            ___ About us
          </h2>
          <p style={{ paddingTop: 20, paddingBottom: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, a.
            Quo quaerat adipisci iste, dolores amet ad, quae ducimus tenetur
            cumque earum libero error delectus eveniet iure, maxime perferendis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sunt
            molestiae aliquid consectetur deleniti tempore quo quibusdam aliquam
            atque rerum cum accusamus eveniet placeat, cumque esse, qui,
            possimus pariatur suscipit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam consequuntur nihil tenetur cumque animi
            natus quis minus quod sequi maiores non similique, possimus esse,
            amet incidunt excepturi tempore numquam iure!
          </p>
        </div>
        <div class="fourBannerContainer_secondDiv">
          <img
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
            alt=""
            style={{ width: 400, height: 550, marginTop: -30 }}
          />
          {/* <img
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
            alt=""
            style={{ width: 200, height: 250, position: "relative" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default FourBanner;
