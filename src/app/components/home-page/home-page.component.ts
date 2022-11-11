import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbCallService } from 'src/app/services/db-call.service';
import { LoginDetails } from 'src/app/util/models/login-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dbCall: DbCallService,private router: Router) { }
  userLogin: boolean = false;

  ngOnInit(): void {
    if(this.dbCall.adminJwt===""){
      this.dbCall.openSnackBar("Please Login as Admin");
      this.router.navigate(['login'])

    }
  }

  handleUserLogin(userDetails: LoginDetails){
    this.userLogin = true;
   
    this.dbCall.createUser(userDetails.username, userDetails.password).subscribe(
      (res: any) => {
        this.dbCall.openSnackBar(res.message);
        this.userLogin = false;
      },
      (error) => {
        this.dbCall.openSnackBar("User Creation Failed " + error.error.errors[0].defaultMessage);
        this.userLogin = false;
      }

    )

    
  }

  logout(){
    this.router.navigate(['login']);
  }
}
