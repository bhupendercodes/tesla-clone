import React from "react";
import { Helmet } from "react-helmet";
import TeslaAccount from "./TeslaAccount/TeslaAccount";

function Account() {

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Tesla Account | Tesla</title>
      </Helmet>
      <TeslaAccount/>
    </div>
  );
}

export default Account;
