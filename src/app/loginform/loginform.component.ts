import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm: FormGroup;

  


  constructor(private router: Router ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required])

  })

  }
  


  onSubmit(){
    
    if(this.loginForm.valid){
    this.router.navigateByUrl('/home');
    
    }
  }



}
