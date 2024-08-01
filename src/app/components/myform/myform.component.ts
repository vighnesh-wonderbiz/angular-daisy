import { Component } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css',
})
export class MyformComponent {
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

  langArr: { name: string; selected: boolean }[] = [
    { name: 'python', selected: false },
    { name: 'js', selected: false },
    { name: 'cpp', selected: false },
    { name: 'dotnet', selected: false },
  ];
  title = 'angular-form';
  error: { name: string; message: string; isError: boolean }[] = [
    { name: 'name', message: 'Please provide name', isError: false },
    { name: 'email', message: 'Please provide email', isError: false },
    { name: 'gender', message: 'Please provide gender', isError: false },
    { name: 'email', message: 'Please provide valid email', isError: false },
    {
      name: 'languages',
      message: 'Select atleast one language',
      isError: false,
    },
  ];

  ngOnInit() {
    this.error.forEach((e) => (e.isError = false));
  }

  changeErrState = (name: string, val: string) => {
    this.error.forEach((err) => {
      if (err.name == name && (val != '' || val)) {
        err.isError = false;
      }
    });
  };
  updateLanguages = () => {
    this.langArr.forEach((l) => {
      if (l.selected) {
        this.form.languages.push(l.name);
      }
    });
  };
  handleCheck = (e: boolean, val: string) => {
    if (e) {
      this.langArr.forEach((l) => {
        if (l.name == val) {
          this.updateLanguages();
          l.selected = true;
          this.error[4].isError = this.form.languages.length > 1;
        }
      });
    } else {
      this.langArr.forEach((l) => {
        if (l.name == val) {
          this.updateLanguages();
          l.selected = false;
          this.error[4].isError = this.form.languages.length > 1;
        }
      });
    }
    console.log(this.error);
  };

  checkEmail = () => {
    var re = /\S+@\S+\.\S+/;
    this.error[3].isError = this.form.email != '' && !re.test(this.form.email);
  };
  checkValid = () => {
    const currForm = this.form;
    let isValid = true;
    if (!currForm.name || currForm.name == '') {
      this.error[0].isError = true;
      isValid = false;
    }
    if (!currForm.email || currForm.email == '') {
      this.error[1].isError = true;
      isValid = false;
    }
    if (!currForm.gender || currForm.gender == 'none') {
      this.error[2].isError = true;
      isValid = false;
    }
    if (currForm.languages.length < 2) {
      this.error[4].isError = true;
      isValid = false;
    }
    if (currForm.email == '') {
      this.error[3].isError = true;
      isValid = false;
    }
    return isValid;
  };

  handleSubmit = () => {
    if (this.checkValid()) {
      return alert('Form submitted');
    }
  };
}
