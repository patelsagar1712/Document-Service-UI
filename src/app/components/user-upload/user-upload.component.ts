import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DbCallService } from 'src/app/services/db-call.service';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, public dbCall: DbCallService, public router: Router) { }
  uploadForm!: FormGroup;
  isLoading: boolean = false;
  file!: File;
  durationInSeconds = 3;

  ngOnInit(): void {
    if (this.dbCall.userToken === "") {
      this.router.navigate(['login']);
    }
    this.uploadForm = new FormGroup({
      fileName: new FormControl('', [Validators.required])
    })
  }

  browseFiles(event: any) {
    this.file = event.target.files[0]
    console.log("Current File:", this.file);
  }

  uploadFiles() {
    this.dbCall.uploadFile(this.file).subscribe(
      (res: any) => {
        this.dbCall.openSnackBar("Uploaded Sucessfully");
      },
      (error) => {
        this.dbCall.openSnackBar("Uploaded Sucessfully");
      }

    );


  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  // templateUrl: 'snack-bar-component-example-snack.html',
  template: `{{data}}`
})
export class ToasterComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
}
