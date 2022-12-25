const SecondBanner = () => {
  return <div class="secondBanner">
    <h3>__ Trusted by</h3>
    <div>
        <Sponsors />
        <Sponsors />
        <Sponsors />
        <Sponsors />
        <Sponsors />
    </div>
  </div>;
};

const Sponsors = () => {
    return <div class="sponsors">
        <img src="https://rtnb.bi/fr/imagertnbbuja/articles/1-0/51/OBR.png" alt="obr" />
    </div>
};

export default SecondBanner;
