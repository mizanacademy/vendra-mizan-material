import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  trafficLight = "purple";
  testVal:string = "test";
  yellowColor = "yellow";
  constructor(public formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      title: ["", Validators.required],
      message: ["", Validators.required]     
    });


  }

  sendData(){
    if(this.contactForm.invalid){
      
      return;
    }
    console.log(this.contactForm.value);
  }
}
