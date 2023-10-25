import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  genders = [
    {id: 'check-male' , value:'male', display:'Male'},
    {id: 'check-female' , value:'female', display:'Female'},
    {id: 'check-other' , value:'other', display:'Prefer not to say'},

  ]
  
  @ViewChild('registrationForm') form: NgForm
  onFormSubmitted(form: NgForm){
    console.log(this.form)
    console.log(this.form.value)
    console.log(this.form.value.firstname);
    console.log(this.form.controls['lastname'].value);
    console.log(this.form.value.email);
    console.log(this.form.value.country)
  }
}
