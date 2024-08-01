import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css',
})
export class UserformComponent {
  form: {
    name: string;
    email: string;
    gender: string;
    languages: string[];
    isMarried: boolean;
  } = {
    name: '',
    email: '',
    gender: 'none',
    languages: [],
    isMarried: false,
  };
  langArr: { [id: string]: { selected: boolean } } = {
    python: { selected: false },
    js: { selected: false },
    dotnet: { selected: false },
  };
  i: number = 0;
  isSubmitted: boolean = false;

  error: { [id: string]: { message: string; isError: boolean } } = {
    name: { message: 'Provide name', isError: false },
    email: { message: 'Invalid email', isError: false },
    gender: { message: 'Select gender', isError: false },
    languages: { message: 'Please select atleast 1 language', isError: false },
  };

  resetError = () => {
    Object.keys(this.error).forEach((e) => {
      this.error[e].isError = false;
    });
  };
  resetLangArr = () => {
    Object.keys(this.langArr).forEach((e) => {
      this.langArr[e].selected = false;
    });
  };

  resetForm = () => {
    this.form.name = '';
    this.form.email = '';
    this.form.gender = 'none';
    this.form.languages = [];
    this.form.isMarried = false;
    this.resetLangArr();
    this.resetError();
  };

  ngOnInit() {
    this.resetForm();
  }

  changeErrState = (name: string, val: string) => {
    if (name == 'email') {
      this.checkEmail();
    } else {
      this.error[name].isError = false;
    }
  };

  updateLanguages = () => {
    Object.keys(this.langArr).forEach((l) => {
      if (this.langArr[l].selected) {
        if (!this.form.languages.includes(l)) {
          this.form.languages.push(l);
        }
      }
    });
  };

  handleCheck = (e: boolean, val: string) => {
    if (e) {
      this.i++;
    } else {
      this.i--;
    }
    this.error['languages'].isError = this.i < 1;
    this.langArr[val].selected = e;
  };

  checkEmail = (): boolean => {
    var re = /\S+@\S+\.\S+/;
    if (this.form.email == '' || !this.form.email) {
      this.error['email'].message = 'Provide email';
      this.error['email'].isError = true;
      return true;
    } else {
      this.error['email'].message = 'Invalid email';
      this.error['email'].isError = !re.test(this.form.email);
      return !re.test(this.form.email);
    }
  };

  checkValid = () => {
    const currForm = this.form;
    let isValid = true;
    if (!currForm.name || currForm.name == '') {
      this.error['name'].isError = true;
      isValid = false;
    }
    if (this.checkEmail()) {
      isValid = false;
    }
    if (!currForm.gender || currForm.gender == 'none') {
      this.error['gender'].isError = true;
      isValid = false;
    }
    if (currForm.languages.length < 1) {
      this.error['languages'].isError = true;
      isValid = false;
    }
    return isValid;
  };

  handleSubmit = () => {
    this.updateLanguages();
    if (this.checkValid()) {
      this.isSubmitted = true;
      this.resetForm();
      setTimeout(() => {
        this.isSubmitted = false;
      }, 4000);
    }
  };
}
