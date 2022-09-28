import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    //@api counter = 0;

    __currentCount = 0;
    priorCount = 0;

    @api
    get counter(){
        return this.__currentCount;
    }
    set counter(value){
        this.priorCount = this.__currentCount;
        this.__currentCount = value;
    }

    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }

    handleMultiply(event){
        const factor = event.detail;
        this.counter *=factor;
    }

    handleDivision(event){
        const divisor = event.detail;
        this.counter /=divisor;
    }

    @api
    maximizeCounter(){
        this.counter += 1000000;
    }


}