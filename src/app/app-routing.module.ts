import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardHrComponent } from './dashboard-hr/dashboard-hr.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminHRGuard } from './guards/admin-hr.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeGuard } from './guards/employee.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { BodyEmployeeDashbordComponent } from './body-employee-dashbord/body-employee-dashbord.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    path: 'admin-dashboard',
    component: AdminComponent,canActivate: [AuthGuard , AdminGuard],
    children: [
      {
        path: 'admin-dashboard',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component')
      },
      { path: 'projects', component: ProjectsComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'admin-hr-dashboard', component: DashboardHrComponent, canActivate: [AuthGuard , AdminHRGuard] },
  { path: 'employee-dashboard', component: DashboardClientComponent, canActivate: [AuthGuard , EmployeeGuard],
    children: [
      { path: 'profile', component: ProfileEmployeeComponent },
      { path: 'home', component: BodyEmployeeDashbordComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' } ]
   },
  {path:'reset-password', component: ResetPasswordComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path: 'unauthorized',component:UnauthorizedComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
