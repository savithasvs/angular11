import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  totalCount: number=0;
  hitIncreamentValue:number = 10;
  constructor() { }

  ngOnInit(): void {
  }
  increaseCount(value:number){
    this.totalCount+= value;
  }
}
