import React, { Component } from "react";
import { connect } from "react-redux";

const BankList = ({ banks }) => {

  const PopulateBankList = () => {
    return (
      <ul>
        {banks.sort((a, b) => b.savings - a.savings).map((bank) => (
          <li key={bank.id}>{bank.name} is {bank.savings}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <p>Lista de bancos</p>
      <div>
        <PopulateBankList />
      </div>
    </div>
  )
}

export default BankList;
