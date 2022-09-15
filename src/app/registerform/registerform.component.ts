import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../registerform/validators';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  register: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.register = new FormGroup({
      firstName: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
      lastName: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
      email: new FormControl('', [Validators.required, 	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      city: new FormControl('', [Validators.required]),
      dateofbirth: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.register.valid) {
      console.table(this.register.value);
    }
  }
}
