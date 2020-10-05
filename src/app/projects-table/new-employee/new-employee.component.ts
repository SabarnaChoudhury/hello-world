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

  insert(f){
    // console.log(this.newData);
    // this.newData.serialNumber=(this.parentData.length+1).toString();
    // this.newData.Status="Success";
    // this.newData.checked=true;
   
    // this.parentData[this.parentData.length]=this.newData;
   

    this.parentData.push({
      projectName:f.value.projectName,
      teamMembers:f.value.teamMember,
      projectProgress:f.value.projectProgress,
      serialNumber:(this.parentData.length+1).toString(),
      Status:f.value.projectProgress>=50?"On Track":"Off Track",
      checked:f.value.projectProgress>=50? false:true
    })
    this.sendNewData.emit(this.parentData);
  }

  test(f){
    console.log(f.value.projectName)
  }


}
