import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernameValidator } from '../registerform/validators';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;




  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, UsernameValidator.cannotContainSpace]),
      password: new FormControl('', [Validators.required])

    })

  }



  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigateByUrl('/home');
    }
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Login successfull!!!');
      console.table(this.loginForm.value);
    }
  }
}
