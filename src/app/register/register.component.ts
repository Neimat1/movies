import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string='';


  constructor(private _AuthService:AuthService , private _Router:Router) { }


  registerForm =new FormGroup({
    first_name:new FormControl(null, [Validators.minLength(3), Validators.pattern('^[a-z]{3,10}$'),Validators.maxLength(10), Validators.required]),
    last_name:new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
    age:new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),

  })

  submitRegisterForm(registerForm:FormGroup){
    console.log(registerForm.value);
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if(response.message == 'success'){
        //tmam
        this._Router.navigate(['login'])
      }
      else{
        this.error=response.errors.email.message;

        //problem
      }
      });

  }


  ngOnInit(): void {
  }

}
