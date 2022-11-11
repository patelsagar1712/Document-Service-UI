import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbCallService } from 'src/app/services/db-call.service';
import { LoginDetails } from 'src/app/util/models/login-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnChanges {

  constructor(public dbCall: DbCallService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['isLoading']['currentValue']);
    this.isLoading = changes['isLoading']['currentValue']
  }

  loginForm!: FormGroup;
  @Input() userType = '';
  @Input() isLoading = false;
  @Input() type = ''
  @Output()
  loginDetails = new EventEmitter<LoginDetails>()
  ngOnInit(): void {
    this.initiateForm()

  }

  initiateForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  handleLogin() {
    // this.isLoading = !this.isLoading;
    let userDetails: LoginDetails = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    }
    this.loginDetails.emit(
      userDetails
    )
    this.initiateForm();
    // this.isLoading = !this.isLoading;
  }
  

}
