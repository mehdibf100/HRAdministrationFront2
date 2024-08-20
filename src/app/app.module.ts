import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { DashboardHrComponent } from './dashboard-hr/dashboard-hr.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProjectsComponent } from './projects/projects.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { BodyEmployeeDashbordComponent } from './body-employee-dashbord/body-employee-dashbord.component';
import { RouterModule } from '@angular/router';
import { HttpRequestInterceptor } from './helpers/http.interceptor';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { AddUserComponent } from './dashboard-components/users/add-user/add-user.component';
import { UpdateUserComponent } from './dashboard-components/users/update-user/update-user.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { NavBarMenuLeaveComponent } from './nav-bar-menu-leave/nav-bar-menu-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { MesLeaveComponent } from './mes-leave/mes-leave.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AttendancesComponent } from './attendances/attendances.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    ProjectsComponent,
    NavigationComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
    LoginComponent,
   DashboardHrComponent,
    UnauthorizedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardClientComponent,
    AddUserComponent,
    UpdateUserComponent,
    UsersComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    ApplyLeaveComponent,
    NavBarMenuComponent,
    BodyEmployeeDashbordComponent,NavBarMenuLeaveComponent,
    ProfileEmployeeComponent,
    LeaveComponent,
    MesLeaveComponent,
    ComplaintsComponent,
    SidebarComponent,
    AttendancesComponent,
    TimeTrackingComponent

  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserAnimationsModule,
    HttpClientModule,RouterModule,MatInputModule,MatDatepickerModule,MatNativeDateModule ,MatIconModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:HttpRequestInterceptor , multi: true },],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
