import React from "react";
import { AddressBox, SimpleAccountInfo } from "../../components";

export const DashboardHome = () => {
  return (
    <>
      <h1>Account Dashboard</h1>
      <div className="dashboard clearfix">
        <SimpleAccountInfo />
        <AddressBox />
      </div>
    </>
  );
};
