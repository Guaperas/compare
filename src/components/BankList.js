import React, { Component } from "react";
import { connect } from "react-redux";

const BankList = ({ banks }, { money }) => {
  const second = (index) => {
    if (typeof taeSavings !== "undefined") {
      return taeSavings[index].saving
    }
  }
  const PopulateBankList = () => {
    console.log(money + " money");
    return (
      <ul>
        {banks.map((bank, index) => (
          <li key={bank.id}>{bank.name} is {money}</li>
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
