import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/admin-pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',          component: DashboardComponent },
   // { path: 'add-contact',        component: AddGroupsComponent },

];
