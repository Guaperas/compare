import React, { Component } from "react";
import { connect } from "react-redux";

const BankList = ({banks}) => {

  const PopulateBankList = () => {
    return (
      <ul>
        {banks.map((bank) => (
          <li key={bank.id}>{bank.name}{console.log(bank.name)}</li>
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
