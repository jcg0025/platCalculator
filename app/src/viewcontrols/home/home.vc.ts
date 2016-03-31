import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        operand1: '',
        operand2: '',
        result: '',
    };
    constructor() {
        super();
    }
    add(operand1: any, operand2: any) {
        let op1 = parseInt(operand1, 10);
        let op2 = parseInt(operand2, 10);
        if (!isNaN(op1 + op2)) {
            let sum = op1 + op2;
            this.context.result = `The sum is ${sum}`;
            this.context.operand1 = undefined;
            this.context.operand2 = undefined;
        } else {
            alert('2 Operands Required');
        }
    }
     subtract(operand1: any, operand2: any) {
         let op1 = parseInt(operand1, 10);
         let op2 = parseInt(operand2, 10);
        if (!isNaN(op1 - op2)) {
            let difference = op1 - op2;
            this.context.result = `The diffence is ${difference}`;
            this.context.operand1 = undefined;
            this.context.operand2 = undefined;
        } else {
            alert('2 Operands Required');
        }
    }
     multiply(operand1: any, operand2: any) {
         let op1 = parseInt(operand1, 10);
         let op2 = parseInt(operand2, 10);
        if (!isNaN(op1 * op2)) {
            let product = op1 * op2;
            this.context.result = `The product is ${product}`;
            this.context.operand1 = undefined;
            this.context.operand2 = undefined;
        } else {
            alert('2 Operands Required');
        }
    }
     divide(operand1: any, operand2: any) {
         let op1 = parseInt(operand1, 10);
         let op2 = parseInt(operand2, 10);
        if (!isNaN(operand1/operand2)) {
            let quotient = op1/op2;
            if(quotient === Infinity) {
                alert('Skynet Loading...');
                this.context.operand1 = undefined;
                this.context.operand2 = undefined;
            } else {
                this.context.result = `The quotient is ${quotient}`;
                this.context.operand1 = undefined;
                this.context.operand2 = undefined;
            }
        } else {
            alert('2 Operands Required');
        }
    }
    
    
}

register.viewControl('home-vc', HomeViewControl);
