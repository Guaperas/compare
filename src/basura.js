
    // let regEx = /^(\.|\,|\d{0,10}|€|£|\$)?(\.|\,|\d{0,10}|€|£|\$)?((\.|\,)?\d{1,10}(€|£|\$)?)$/;
    // let digits = /\d/

    // if ((e.target.value.length < 1) || (e.target.value.length < 5)){
    //   console.log("between 0 and 3")
    //   console.log(e.target.value.length);
    //   this.setState(
    //     { money: e.target.value, message: e.target.value }
    //   )
    // }
    // else if (digits.test(e.target.value) || e.target.value === ""){
    //   console.log(e.target.value.length + "wow");
    //   this.setState(
    //     { money: e.target.value, message: e.target.value }
    //   )
    // }
    // else{
    //   this.setState(
    //     { message: "Please, enter valid value."}
    //   )
    // }

        //let regEx2 = /^(\.|\,|\d{0,10}|€|£|\$)?(\.|\,|\d{0,10}|€|£|\$)?(\d{1,10}(€|£|\$)?)$/;
        //let regEx = /^(\d{0,10}|\,|\.|€|£|\$)?(\d{0,10})?(|\.|\,)?(\d{1,10}(€|£|\$)?)$/;



        /////////////////////////////////////////////////////////////////////////////////////////////////////////



    // if (e.target.value === "") {
    //   this.setState(
    //     { message: "Set a quantity.", isValid: false }
    //   )
    // }
    // if (regEx.test(e.target.value)) {
    //   this.setState(
    //     { message: e.target.value, isValid: true }
    //   )
    // }
    // else {
    //   this.setState(
    //     { message: "Invalid quantity.", isValid: false }
    //   )
    // }
    // if (regEx.test(e.target.value)) {
    //   this.setState(
    //     { message: e.target.value, money: e.target.value }
    //   )
    // }
    // if (this.state.isValid) {
    //   this.setState(
    //     { money: e.target.value, message: e.target.value }
    //   )
    // }


    //    let regExp = /^(\d{0,10}|\,|\.|€|£|\$)?(\d{0,10})?(|\.|\,)?(\d{1,10}(€|£|\$)?)$/;
    //let regExpWtritting = /([€£\$\,\.\d])/g;
    //let regExpWtritting = /^(£|\$|€)?(\.|\,)?(\d*)?((€|£|\$|\,|\.|\d*)?(\d{1,2})?)$/;
    //let regExpWtritting = /(€|£|\$)?(\d*)((\,|\.)?(\d{2})?)?(€|£|\$)?/;
    //let regExp = /^(\d{0,10}|\,|\.|€|£|\$)?(\d{0,10})?(|\.|\,)?(\d{1,10}(€|£|\$)?)$/;




    import React, { Component } from "react";
    import { connect } from "react-redux";
    
    class BankList extends Component {
    
      PopulateBankList = () => {
    
        return (
          <ul>
            {this.props.banks.map((bank) => (
              <li key={bank.id}>{bank.name}{console.log(bank.name)}</li>
            ))}
          </ul>
        );
    
      }
      render() {
        return (
          <div>
            <p>Lista de bancos</p>
            <div>
              <button onClick={this.PopulateBankList}>Get banks</button>
              <this.PopulateBankList />
              {console.log(this.props.banks)}
            </div>
          </div>
        )
      }
    }
    
    const mapStateToProps = (state) => {
      return {
        banks: state.banks,
      }
    }
    
    export default connect(mapStateToProps)(BankList);
    






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