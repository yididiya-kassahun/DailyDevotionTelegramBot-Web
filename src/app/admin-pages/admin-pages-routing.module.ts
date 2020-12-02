import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DevotionsComponent} from "./devotions/devotions.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'Devotions', component: DevotionsComponent},
    {path: 'Settings', component: SettingsComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminPagesRoutingModule {
}
