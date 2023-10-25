import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  firstName : string = '';
  lastName : string = '';
  emailId: string = '';
  dateofbirth: string = '';
  country: string = '';
  defaultGender: string = 'male';
  defaultCountry: string = 'India';
  city: string = '';
  region: string = '';
  postalcode: string = '';
  userName: string = '';
  finalStatus: boolean = true;
  genders = [
    {id: 'check-male' , value:'male', display:'Male'},
    {id: 'check-female' , value:'female', display:'Female'},
    {id: 'check-other' , value:'other', display:'Prefer not to say'},

  ]
  
  @ViewChild('registrationForm') form: NgForm
  onFormSubmitted(form: NgForm){
    console.log(this.form)
    // console.log(this.form.value)
    // console.log(this.form.value.firstname);
    // console.log(this.form.controls['lastname'].value);
    // console.log(this.form.value.dateofbirth);
    // console.log(this.form.value.email);
    // console.log(this.form.value.address.country);


    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailId = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postalcode = this.form.value.address.postalcode;
    this.userName = this.form.value.username;
    this.dateofbirth = this.form.value.dateofbirth;


    //this.form.reset();

    this.form.form.patchValue({
      gender: 'male',
      address: {
        country: 'India'
      }
    })
  }

  
  generateUserName(){

    let username = '';

    if(this.firstName.length >= 3){
      username += this.firstName.slice(0, 3);
    }
    else {
      username += this.firstName;
    }

    if(this.lastName.length >= 3){
      username += this.lastName.slice(0, 3);
    }
    else {
      username += this.lastName;
    }

    let datetime = new Date(this.dateofbirth);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log("Username: "+username);

        // Not possible to assign to read only VALUE
    // this.form.controls['username'].value = username;
    // console.log(this.form.value.username)

    //  this.form.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phonenumber: this.form.value.phonenumber,
    //   dateofbirth: this.form.value.dateofbirth,
    //   gender: this.form.value.gender,
    //   username: username,
    //   address: {
    //     address1: this.form.value.address.address1,
    //     address2: this.form.value.address.address2,
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postalcode: this.form.value.address.postalcode
    //   }
    // })

    this.form.form.patchValue({
      username: username
        // address: {
      //   country: 'Japan'
      // }
    })

  }

  
    onFinalSubmit()
    {
      this.finalStatus = !this.finalStatus;
    }
}
