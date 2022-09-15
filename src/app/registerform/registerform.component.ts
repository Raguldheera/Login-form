import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  register: FormGroup;

  constructor() { }

  ngOnInit() {
    this.register = new FormGroup({
    firstName: new FormControl ('',[Validators.required]),
    lastName: new FormControl ('',[Validators.required]),
    email: new FormControl  ('',[Validators.required,Validators.email]),
    city: new FormControl ('',[Validators.required])
})
  }

}
