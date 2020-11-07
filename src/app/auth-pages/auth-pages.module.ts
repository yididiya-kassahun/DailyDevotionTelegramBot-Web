import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthPagesRoutingModule} from "./auth-pages-routing.module";
import {
    MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatExpansionModule,
      AuthPagesRoutingModule,
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatSelectModule,
      MatCardModule,
      MatInputModule,
      MatSelectModule,
      MatProgressSpinnerModule

  ],
  declarations: [LoginComponent],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
})
export class AuthPagesModule { }
