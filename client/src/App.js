import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  // const [coins, setCoins] = useState({
  //   tezos: "",
  //   burst: "",
  //   cardano: "",
  // });

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/simple/price?ids=tezos%2Cburst%2Ccardano&vs_currencies=usd"
  //     )
  //     .then((res) => {
  //       setCoins({
  //         tezos: res.data.tezos.usd,
  //         burst: res.data.burst.usd,
  //         cardano: res.data.cardano.usd,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   console.log("coins: ", coins);
  // }, [coins]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
