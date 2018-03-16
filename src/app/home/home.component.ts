import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";
import {FormPoster} from "../services/forms-poster.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [];
  model = new Employee('Darla', 'Smith', true, 'w2', 'default');
  hasPrimaryLanguageError = false;
  startDate: Date;
  fullTimeStatus = "Full-Time";
  taxType = 'W2';

  constructor (private formPoster: FormPoster) {
    this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );
  }

  submitForm(form: NgForm) {

    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      )
  }

  validatePrimaryLanguage(value) {
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
    console.log('lang: ' + this.model.primaryLanguage);
  }


  // This function can be used to make the first letter of a string into a capital letter.
  // firstNameToUpperCase(value: string) {
  //   if (value.length > 0)
  //     this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
  //   else
  //     this.model.firstName = value;
  // }
}
