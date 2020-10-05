import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent{
 

  @Input() parentData=[]
  @Output() sendNewData : EventEmitter<object>=new EventEmitter<object>();
  
  
 
  // newData={
  //   "serialNumber": "",
  //   "projectName": "",
  //   "teamMembers": "",
  //   "projectProgress": "",
  //   "Status":"",
  //   "checked": true
  // }

  insert(a:HTMLInputElement,b:HTMLInputElement,c:HTMLInputElement){
    // console.log(this.newData);
    // this.newData.serialNumber=(this.parentData.length+1).toString();
    // this.newData.Status="Success";
    // this.newData.checked=true;
   
    // this.parentData[this.parentData.length]=this.newData;
   

    this.parentData.push({
      projectName:a.value,
      teamMembers:b.value,
      projectProgress:c.value,
      serialNumber:(this.parentData.length+1).toString(),
      Status:"Success",
      checked:true
    })
    this.sendNewData.emit(this.parentData);
  }


}
