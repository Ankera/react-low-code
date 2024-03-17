import React, { FC, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import "./_mock/index";

const App: FC = () => {
  useEffect(() => {
    axios.get("/api/test").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="title">hello React 112233</div>
    </div>
  );
};

export default App;
