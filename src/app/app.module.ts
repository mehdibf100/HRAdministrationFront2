import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { NgModule } from '@angular/core';
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
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
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
    DashboardAdminComponent,
    DashboardHrComponent,
    UnauthorizedComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardClientComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, BrowserAnimationsModule,
    HttpClientModule, ProfileEmployeeComponent,BodyEmployeeDashbordComponent,RouterModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:HttpRequestInterceptor , multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {}
