import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  constructor(private sharedService: DataServiceService) { }
  messageS1: string;
  
  ngOnInit(): void {}

  sendMsg() {
    this.sharedService.emitData(this.messageS1);
  }

}
