import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  constructor(private sharedService:DataServiceService) { }
  messageS2:any;
  ngOnInit(): void {
    this.sharedService.subscriber.subscribe(data=>{this.messageS2=data})
  }

  

}
