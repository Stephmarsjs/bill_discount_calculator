import React, { Component } from 'react';

import Results from './Results';
import Inputs from './Inputs';
import Buttons from './Buttons';
const btnsValue = [9,8,7,6,5,4,3,2,1,'.',0,'DEL'];
const tipPercentages = [.05, .10, .15, .20];

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: btnsValue,
            clickedBtn: '',
            billTotal: '',
            numberOfPeople: 1,
            percentages: tipPercentages,
            tipPercent: tipPercentages[0],
            tipTotal: 0,
            costPP: 0
        };

        this.onClickButton = this.onClickButton.bind(this);
        this.updateBillTotal = this.updateBillTotal.bind(this);
        this.updatePartyCount = this.updatePartyCount.bind(this);
        this.getTipPercentage = this.getTipPercentage.bind(this);
    }

    onClickButton(i) {
        this.setState({
            clickedBtn: this.state.buttons[i]
        }, function() {
            this.updateBillTotal(i);
        });
    }

    updatedBillTotal(i) {
        let newState;

        if(this.state.clickedBtn === '.' && this.state.billTotal.includes('.')) {
            return null;
        }

        if(this.state.clickedBtn !== 'DEL') {
            newState = this.state.billTotal + this.state.clickedBtn;
            this.setState({
                billTotal: newState
            }, function() {
                this.calculateCosts();
            });
        } else {
            newState = '';
            this.setState({
                billTotal: newState,
                numberOfPeople: 2,
                tipTotal: 0,
                costPP: 0
            }, function() {
                this.calculateCosts();
        });
    }
}

updatePartyCount(sum) {
    if (sum === 'add') {
        newState = this.state.numberOfPeople + 1;
        this.setState({
            numberOfPeople: newState
        }, function() {
            this.calculateCosts();
        });
    } else if(sum === 'minus' && this.state.numberOfPeople > 1) {
        newState = this.state.numberOfPeople - 1;
        this.setState({
            numberOfPeople: newState 
        }, function() {
            this.calculateCosts();
        });
    } else {
        this.setState({
            numberOfPeople: this.state.numberOfPeople
        }, function() {
            this.calculateCosts();
        });
    }
}

getTipPercentage(i) {
    let newState = this.state.percentages[i];
    this.setState({
        tipPercent: newSate
    }, function() {
        this.calculateCosts();
    })
  };
}