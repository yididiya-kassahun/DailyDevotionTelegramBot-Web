import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/admin-pages/dashboard/dashboard.component';

const routes: Routes = [
   { path: '', component: DashboardComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'group-contacts',
  //   component: GroupContactsComponent,
  //   children: [
  //     { path: 'add-group', component: AddGroupedContactComponent}
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
