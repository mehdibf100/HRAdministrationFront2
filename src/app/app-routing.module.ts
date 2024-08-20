import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { LoginComponent } from './login/login.component';
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
import { TasksComponent } from './dashboard-components/tasks/tasks.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { LeaverequestsComponent } from './dashboard-components/leaverequests/leaverequests.component';
import { FilesComponent } from './dashboard-components/files/files.component';
import { AnnouncementsComponent } from './dashboard-components/announcements/announcements.component';
import { SalaryhistoryComponent } from './dashboard-components/salaryhistory/salaryhistory.component';
import { HolidaysComponent } from './dashboard-components/holidays/holidays.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { MesLeaveComponent } from './mes-leave/mes-leave.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AttendancesComponent2 } from './dashboard-components/attendances/attendances.component';
import { AttendancesComponent } from './attendances/attendances.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'admin-dashboard',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      { path: 'analytics', loadComponent: () => import('./demo/dashboard/dash-analytics.component') },
      { path: 'projects', component: ProjectsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'users', component: UsersComponent },
      { path: 'leaves', component: LeaverequestsComponent },
      { path: 'complaints', component: ComplaintsComponent },
      { path: 'files', component: FilesComponent },
      { path: 'attendances', component: AttendancesComponent2 },
      { path: 'announcements', component: AnnouncementsComponent },
      { path: 'salaryhistory', component: SalaryhistoryComponent },
      {path:'holidays', component: HolidaysComponent}
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'admin-hr-dashboard', component: DashboardHrComponent, canActivate: [AuthGuard, AdminHRGuard] },
  { path: 'employee-dashboard', component: DashboardClientComponent, canActivate: [AuthGuard, EmployeeGuard],
    children: [
      { path: 'profile', component: ProfileEmployeeComponent },
      { path: 'home', component: BodyEmployeeDashbordComponent },
      { path: 'applyLeave', component: ApplyLeaveComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'mes-leave', component: MesLeaveComponent },
      { path: 'Complaints', component: ComplaintsComponent },
      { path: 'attendances', component:AttendancesComponent },
      { path: 'task', component:TimeTrackingComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'side', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
