import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterComponent } from '../components/user-upload/user-upload.component';


@Injectable({
  providedIn: 'root'
})
export class DbCallService {

  env = "http://localhost:8080";
  adminJwt: string = "";
  durationInSeconds = 3;
  userToken: string = "";
  constructor(public http: HttpClient, public _snackBar: MatSnackBar) {

  }


  login(username: string, password: string) {
    const url = `${this.env}/login`;
    const data = {
      'username': username,
      'password': password
    };
    return this.http.post(url, data);
  }

  userLogin(username: string, password: string) {
    const url = `${this.env}/user/login`;
    const data = {
      'username': username,
      'password': password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userToken}`
    })
    return this.http.post(url, data, { headers: headers });
  }

  createUser(username: string, password: string) {
    const url = `${this.env}/user`;
    const data = {
      'username': username,
      'password': password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.adminJwt}`
    })
    return this.http.post(url, data, { headers: headers });
  }

  uploadFile(file: any) {
    const url = `${this.env}/file/upload`;
    const formData: FormData = new FormData();
    formData.append("file", file);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.userToken}`,
      'Accept': "multipart/form-data"
    });
    return this.http.post(url, formData, { headers: headers });
  }


  openSnackBar(message: string) {
    this._snackBar.openFromComponent(ToasterComponent, {
      duration: this.durationInSeconds * 1000,
      data: message,
    });
  }
}
