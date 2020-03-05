import { Component, ViewChild } from '@angular/core';
import { NgForm, NgFormSelectorWarning } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled = true;
  @ViewChild('f', { static: true }) signUpForm: NgForm;
  defultQuestion = 'pet';
  genders = ['Male', 'Female'];
  submitted = false;
  answer = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestDeaults() {
    const suggestedName = 'Superuser';

    this.signUpForm.setValue({
      userDataGroup: {
        username: "ee",
        email: "Test@Test.com"
      },
      secreQuestionDataGroup: { secret: "teacher", questionAnswer: 'Some Answer' },
      gender: "Male"
    });

  }

  suggestUserName() {
    this.signUpForm.form.patchValue(
      {
        userDataGroup: {
          username: "SuggestedUserName"
        },
        secreQuestionDataGroup: { secret: "pet" }
      }
    );
  }

  // onSubmit(form : NgForm){
  //   console.log(form.value['username']);
  // }

  onSubmit() {
    this.submitted=true;
    this.user.username = this.signUpForm.value.userDataGroup.username;
    this.user.email = this.signUpForm.value.userDataGroup.email;
    this.user.secretQuestion = this.signUpForm.value.secreQuestionDataGroup.secret;
    this.user.answer = this.signUpForm.value.secreQuestionDataGroup.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();

  }

}
