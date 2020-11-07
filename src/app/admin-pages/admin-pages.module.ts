import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPagesRoutingModule} from './admin-pages-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
//import {NgxPaginationModule} from "ngx-pagination";
import {MatButtonModule} from "@angular/material/button";
//import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {MatSelectModule} from "@angular/material/select";
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule} from "@angular/material";


@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
      //  ConfirmationPopoverModule,
        // NgxPaginationModule,
        MatListModule,
        MatIconModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
       // ConfirmationPopoverModule,
        MatExpansionModule,
        MatCardModule,
        AdminPagesRoutingModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    declarations: [DashboardComponent,
      
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
})
export class AdminPagesModule {
}
