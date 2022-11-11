import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbCallService } from 'src/app/services/db-call.service';
import { LoginDetails } from 'src/app/util/models/login-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, public dbCall: DbCallService) { }

  userLogin: boolean = false;
  adminLogin: boolean = false;


  ngOnInit(): void {
    this.dbCall.adminJwt = "";
    this.dbCall.userToken = "";
  }

  handleAdminLogin(userDetails: LoginDetails) {
    this.adminLogin = true;
    this.dbCall.login(userDetails.username, userDetails.password).subscribe(
      (res: any) => {
        this.dbCall.adminJwt = res.jwttoken;
        this.dbCall.openSnackBar("Admin Login Success");
        this.adminLogin = false;
        this.router.navigate(['home'])
      },
      (error) => {
        this.dbCall.openSnackBar("Admin Login Failed" + error.error.message);
        this.adminLogin = false;
      }

    )
  }

  handleUserLogin(userDetails: LoginDetails) {
    this.userLogin = true;
    //User

    this.dbCall.userLogin(userDetails.username, userDetails.password).subscribe(
      (res: any) => {
        this.dbCall.userToken = res.message;
        this.dbCall.openSnackBar("User Login Success");
        this.userLogin = false;
        this.router.navigate(['user']);
      },
      (error) => {
        this.dbCall.openSnackBar("User Login Failed" + error.error.message);
        this.userLogin = false;
      }

    );
  }
}
