import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-body',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  header=["#","projectName","teamMembers","projectProgress","Status","Edit"];
  counter=0;
  tableData=[
    {
      "serialNumber": "1",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 67,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "2",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 2,
      "projectProgress": 47,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "3",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 77,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "4",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 60,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "5",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 12,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "6",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 35,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "7",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 2,
      "projectProgress": 97,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "8",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 3,
      "projectProgress": 77,
      "Status": "Success",
      "Edit": "None"
    },
    {
      "serialNumber": "9",
      "projectName": "Pesamakini Backend UI",
      "teamMembers": 4,
      "projectProgress": 77,
      "Status": "Success",
      "Edit": "None"
    }
  ];
  constructor() { }
  Name="sabarna";
  delete=(id)=>document.getElementById(id).remove()
  // edit=(id)=>document.getElementById("name"+id).innerHTML=`<input type="text" id=${'text'+id}>`
  // save=(id)=>document.getElementById("name"+id).innerHTML=((document.getElementById("text"+id) as HTMLInputElement).value);
  edit=(id)=>document.getElementById("name"+id).innerHTML=`<input type="text" id=${'text'+id} [(ngModel)]="tableData[${(parseInt(id)-1)}].projectName" (change)="save()"/>`
  save=()=>alert("hi")

  ngOnInit(){
  }

}
