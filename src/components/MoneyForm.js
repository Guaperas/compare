import React, { Component } from "react";
import { connect } from "react-redux";

class MoneyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: "",
      newMoney: "",
      isValid: false,
      message: "How much money?"
    }
  }

  convertCurrency = (str) => {
    let num = Number(str.replace(",", ".").replace(/[£€\$]/g, "")).toFixed(2);
    return num;
  }

  handleChange = (e) => {

    this.setState(
      { newMoney: e.target.value }
    )

  }
  handleKeyUp = (e) => {

    let regExp = /^(\d*)?(((\,|\.)(\d{1,2}))|(\d+))$/

    if (this.state.newMoney === "") {
      this.setState(
        { isValid: false, money: this.state.newMoney, message: "Enter some value, boiiii" }
      )
    }
    else if (regExp.test(this.state.newMoney)) {
      this.setState(
        { isValid: true, money: this.state.newMoney, message: this.state.newMoney }
      )
    }
    else if (!this.state.isValid) {
      this.setState(
        { isValid: false, message: "Enter a valid value" }
      )
    }
    else {
      this.setState(
        { isValid: false, message: "Enter a valid value" }
      )
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.setMoney(this.convertCurrency(this.state.money));

    this.setState(
      { newMoney: "", isValid: false, message: this.state.newMoney }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' inputMode="numeric" maxLength="14" placeholder='El parné' onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.newMoney} required />
          <input type="submit" disabled={!this.state.isValid} value="Submit" />
          <p>{this.state.message}</p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMoney: (money) => { dispatch({ type: "SET_MONEY", money: money }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyForm);