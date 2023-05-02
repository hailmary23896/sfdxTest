import { LightningElement,wire,track } from 'lwc';
import caseList from '@salesforce/apex/casesController.getCases';

export default class ScratchLwc extends LightningElement {
  @track searchKey='gene';
  @track caseList=[]
  valuefromChild=''
  @wire (caseList,{strAccountName: '$searchKey'}) cases
  handleKeyChange(event){
    this.searchKey = event.target.value;
  }
  handleEdit(event){
    console.log('parent',event)
    this.valuefromChild=event.detail.message;
  }
}