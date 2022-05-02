import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxa',
  templateUrl: './boxa.component.html',
  styleUrls: ['./boxa.component.css']
})
export class BoxaComponent implements OnInit {
  @Input()
  labelValue: any= 'city';
  @Input()
  data: any;
  counter = 0;
  @Output()
  onBoxDataChange: EventEmitter<any> = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }
  onchange (event: Event){
    this.data = (event.target as HTMLInputElement).value;
    this.onBoxDataChange.emit({value: this.data});
  }
}




// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-boxs',
//   templateUrl: './boxs.component.html',
//   styleUrls: ['./boxs.component.css']
// })
// export class BoxsComponent implements OnInit {
//   @Input()
//   labelValue: any= 'city';
//   @Input()
//   data: any;
//   counter = 0;
//   @Output()
//   onBoxDataChange: EventEmitter<any> = new EventEmitter();

//   constructor() { }

//   ngOnInit(): void {
//   }
//  onchange (event: Event){
//    this.data = (event.target as HTMLInputElement).value;
//    this.onBoxDataChange.emit({value: this.data});
//  }
// }
