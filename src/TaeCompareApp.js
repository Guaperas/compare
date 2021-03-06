import React, { Component } from "react";
import { connect } from "react-redux";
//Components import
import MoneyForm from "./components/MoneyForm";
import BankList from "./components/BankList"

class TaeCompare extends Component {

  taeCalculator = () => {

    for (let i = 0; i < this.props.banks.length; i++) {
      const { id, bank, name, tin, tae, max, min, period, country, hacienda, impuesto } = this.props.banks[i];
      console.log(`This is the ${bank},
esta es la cuenta ${name},
tiene un tin de ${tin},
el TAE: ${tae},
como minimo ingresa ${min},
beneficias como maximo ${max},
esta en el pais ${country},
hacienda se llevara tu alma ${hacienda},
y el banco tu cuerpo ${impuesto}`)
      let montante = Number(this.props.money);
      for (let j = 0; j < period; j++) {
        let result = (Math.pow((1 + (tin / 100)), 1 / period) - 1) * montante;
        montante += Number(result);
      }
      console.log((Math.round(montante * 100) / 100).toFixed(2) + " " + bank);
      let montanteID = { id: id, savings: montante };
      this.props.saveTae(montanteID);
      console.log(montanteID);
    }
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.money !== this.props.money) {
      this.taeCalculator();
    }
  }
  render() {
    return (
      <div className="App">
        <h3>Tae Compare Tool</h3>
        <MoneyForm />
        <BankList banks={this.props.banks} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    money: state.money,
    banks: state.banks,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    saveTae: (savings) => { dispatch({ type: "SAVINGS", savings: savings }) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaeCompare);