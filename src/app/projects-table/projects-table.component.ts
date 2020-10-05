import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  tableData=[
    {
      "serialNumber": "1",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 67,
      "Status": "On Track",
      "checked":false
    },
    {
      "serialNumber": "2",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 2,
      "projectProgress": 47,
      "Status": "Off Track",
      "checked":true
    },
    {
      "serialNumber": "3",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 77,
      "Status": "On Track",
      "checked":false
    },
    {
      "serialNumber": "4",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 60,
      "Status": "On Track",
      "checked":false
    },
    {
      "serialNumber": "5",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 12,
      "Status": "Off Track",
      "checked":true
    },
    {
      "serialNumber": "6",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 35,
      "Status": "Off Track",
      "checked":true
    },
    {
      "serialNumber": "7",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 2,
      "projectProgress": 97,
      "Status": "On Track",
      "checked":false
    },
    {
      "serialNumber": "8",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 77,
      "Status": "On Track",
      "checked":false
    },
    {
      "serialNumber": "9",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 77,
      "Status": "On Track",
      "checked":false
    }
  ];
  constructor() { }
  ngOnInit(){
  }

  receiveData(data){
    console.log(data);
    this.tableData=data;
  }

  receiveNewData(data){
    
  
    console.log(data);
  }

  generator(num){
    return new Array(num);
  }

  
}
