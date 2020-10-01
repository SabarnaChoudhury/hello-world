
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'rcb',
  template: `
        <ol>
        <li>Virat Kohli</li>
        <li>AB Deviliers</li>
        <li>Devdutt Padikkal</li>
        <li>Moeen Ali</li>
        <li>Mohammed Siraj</li>
        <li>Parthiv Patel</li>
        <li>Navdeep Saini</li>
        <li>Pawan Negi</li>
        <li>Shivam Dube</li>
        <li>Umesh Yadav</li>
        <li>Dale Steyn</li>
        </ol>
  `,
})

export class RcbComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }

}
