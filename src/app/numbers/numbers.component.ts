import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers:any=[1,20,33,34,47,52,86,91];
  pno:any;
  cc:any;
  isClicked=false;
  get(){
    this.isClicked=true;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
