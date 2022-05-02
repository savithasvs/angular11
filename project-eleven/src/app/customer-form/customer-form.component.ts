import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
   //data model
   customerModel:any;
  constructor() { }

  ngOnInit(): void {
    this.customerModel = {
      firstName: '',
      lastName: '',
      email: 'steve.Jobs@goodplace.com'
  }
}
saveCustomer(CustomerFormGroup: any){
  if(CustomerFormGroup.valid){
    console.log(CustomerFormGroup.value);
  }
}

}



