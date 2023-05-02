import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api value
    custom(event){
        console.log('child, ',event.target.value)
        this.dispatchEvent(new CustomEvent('custom',
                        {detail:{message:event.target.value}}));
    }
   
}