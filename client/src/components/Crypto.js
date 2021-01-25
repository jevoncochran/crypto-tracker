import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

const Crypto = () => {
  const [coins, setCoins] = useState({
    tezos: "",
    burst: "",
    cardano: "",
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=tezos%2Cburst%2Ccardano&vs_currencies=usd"
      )
      .then((res) => {
        setCoins({
          tezos: res.data.tezos.usd,
          burst: res.data.burst.usd,
          cardano: res.data.cardano.usd,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("coins: ", coins);
  }, [coins]);

  return (
    <div style={{ marginBottom: "4%" }}>
      <h1>Cryptocurrency Prices</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          {coins.tezos && (
            <div>
              <p>Tezos</p>
              <p>${coins.tezos}</p>
              <QRCode value={`current price of tezos: $${coins.tezos}`} />
            </div>
          )}
          {coins.burst && (
            <div>
              <p>Burst</p>
              <p>${coins.burst}</p>
              <QRCode value={`current price of burst: $${coins.burst}`} />
            </div>
          )}
          {coins.cardano && (
            <div>
              <p>Cardano</p>
              <p>${coins.cardano}</p>
              <QRCode value={`current price of cardano: $${coins.cardano}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
