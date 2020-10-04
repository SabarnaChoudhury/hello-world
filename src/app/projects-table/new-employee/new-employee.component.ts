import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent{
 

  @Input() parentData=[]
  @Output() sendNewData : EventEmitter<object>=new EventEmitter<object>();
  
  
 
  newData={
    "serialNumber": "",
    "projectName": "",
    "teamMembers": "",
    "projectProgress": "",
    "Status":"",
    "checked": true
  }

  insert(){
    // console.log(this.newData);
    this.newData.serialNumber=(this.parentData.length+1).toString();
    this.newData.Status="Success";
    this.newData.checked=true;
   
    this.parentData[this.parentData.length]=this.newData;
    this.sendNewData.emit(this.parentData);
  }


}
