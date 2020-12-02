import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from 'app/admin-pages/dashboard/dashboard.component';
import {DevotionsComponent} from "./devotions/devotions.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'Devotions', component: DevotionsComponent},
    {path: 'Settings', component: SettingsComponent},
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
export class AdminPagesRoutingModule {
}
