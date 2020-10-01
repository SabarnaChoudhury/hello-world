
import { Component, OnInit } from '@angular/core';
import {add} from "../calc";
@Component({
  selector: 'ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css']
})

export class IplComponent implements OnInit {
  data;
  constructor() { }

  ngOnInit(): void {
    console.log("IPL started after a long time!!!");
    this.data=add();
    console.log(this.data);
  }

}
