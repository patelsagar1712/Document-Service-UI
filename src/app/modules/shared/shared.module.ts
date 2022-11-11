import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToasterComponent } from 'src/app/components/user-upload/user-upload.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LoginFormComponent,ToasterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule, FormsModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule, FormsModule,
    LoginFormComponent,
    MatIconModule
  ]
})
export class SharedModule { }
