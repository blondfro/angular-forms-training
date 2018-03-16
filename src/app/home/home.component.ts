import {Component} from '@angular/core';
import {Employee} from "../models/employee.model";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Spanish', 'French', 'Other'];
  model = new Employee('Darla', 'Smith', true, 'w2', 'default');
  hasPrimaryLanguageError = false;

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
