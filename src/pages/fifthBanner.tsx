import { COLORS } from "../theme";

const FifthBanner = () => {
  return (
    <div class="fifthBanner">
      <div class="fifthBanner_firstDiv">
        <h2 style={{ color: COLORS.primary, fontStyle: "italic" }}>
          ___ Why us
        </h2>
        <h2 style={{ fontSize: 45 }}>Why Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          provident suscipit nemo ipsa, quae voluptatem.
        </p>
        <img
          src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
          alt=""
          style={{ width: 400, height: 550, marginTop: 20 }}
        />
      </div>
      <div class="fifthBanner_secondDiv">
        <Reason />
        <Reason />
        <Reason />
      </div>
    </div>
  );
};

const Reason = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: 50,
        borderTopWidth: 1,
        borderTopColor: "#E1E1E1",
      }}
    >
      <div
        style={{
          height: 100,
          width: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E1E1E1",
          padding: 20,
          textAlign: "center",
          borderRadius: 10,
        }}
      >
        <h2 style={{ marginBottom: -10, fontSize: 40 }}>12</h2>
        <h3>years experience</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at
          nostrum ipsam facere autem nemo eligendi asperiores!
        </p>
      </div>
    </div>
  );
};

export default FifthBanner;
