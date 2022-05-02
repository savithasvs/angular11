import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hit-button',
  templateUrl: './hit-button.component.html',
  styleUrls: ['./hit-button.component.css']
})
export class HitButtonComponent implements OnInit {
  @Input()
  label: number = 0;
  @Output()
  hit= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  btnclickHandler(){
    this.hit.emit(this.label);
  }

}
