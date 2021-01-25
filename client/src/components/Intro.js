import React from "react";
import QRCode from "react-qr-code";

const Intro = () => {
  return (
    <div style={{ marginBottom: "5%" }}>
      <h1>Jevon Cochran</h1>
      <QRCode value="Jevon Cochran" />
    </div>
  );
};

export default Intro;
