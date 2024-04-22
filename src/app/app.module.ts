import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './user/index/index.component';
import { DashboardInternComponent } from './intern/dashboard-intern/dashboard-intern.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { DashboardSuperadminComponent } from './superadmin/dashboard-superadmin/dashboard-superadmin.component';
import { LoginComponent } from './user/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { SuperadminSidebarComponent } from './superadmin/superadmin-sidebar/superadmin-sidebar.component';
import { SuperadminHeaderComponent } from './superadmin/superadmin-header/superadmin-header.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AllDomainsComponent } from './superadmin/all-domains/all-domains.component';
import { AllCategoriesComponent } from './superadmin/all-categories/all-categories.component';
import { AllSubcategoriesComponent } from './superadmin/all-subcategories/all-subcategories.component';
import { AllLanguagesComponent } from './superadmin/all-languages/all-languages.component';
import { AllUsersComponent } from './superadmin/all-users/all-users.component';
import { AllOffresComponent } from './superadmin/all-offres/all-offres.component';
import { SuperadminNotificationsComponent } from './superadmin/superadmin-notifications/superadmin-notifications.component';
import { SuperadminEditProfilComponent } from './superadmin/superadmin-edit-profil/superadmin-edit-profil.component';
import { SuperadminConncectionComponent } from './superadmin/superadmin-conncection/superadmin-conncection.component';
import { TokenInterceptor } from './services/token.interceptor';
import {ChartsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AdminAddFreelanceOfferComponent } from './admin/freelance-offers/admin-add-freelance-offer/admin-add-freelance-offer.component';
import { AdminFreelanceActiveOffersComponent } from './admin/freelance-offers/admin-freelance-active-offers/admin-freelance-active-offers.component';
import { AdminFreelanceEndedOffersComponent } from './admin/freelance-offers/admin-freelance-ended-offers/admin-freelance-ended-offers.component';
import { AdminFreelanceOffersComponent } from './admin/freelance-offers/admin-freelance-offers/admin-freelance-offers.component';
import { AdminAddJobOfferComponent } from './admin/job-offers/admin-add-job-offer/admin-add-job-offer.component';
import { AdminJobActiveOffersComponent } from './admin/job-offers/admin-job-active-offers/admin-job-active-offers.component';
import { AdminJobOffersComponent } from './admin/job-offers/admin-job-offers/admin-job-offers.component';
import { AdminAddInternshipOfferComponent } from './admin/internship-offers/admin-add-internship-offer/admin-add-internship-offer.component';
import { AdminInternshipActiveOffersComponent } from './admin/internship-offers/admin-internship-active-offers/admin-internship-active-offers.component';
import { AdminInternshipEndedOffersComponent } from './admin/internship-offers/admin-internship-ended-offers/admin-internship-ended-offers.component';
import { AdminInternshipOffersComponent } from './admin/internship-offers/admin-internship-offers/admin-internship-offers.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminEditProfilComponent } from './admin/admin-edit-profil/admin-edit-profil.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OffreJobCondidatureComponent } from './admin/offre-job-condidature/offre-job-condidature.component';
import { OffreFreelanceCondidatureComponent } from './admin/offre-freelance-condidature/offre-freelance-condidature.component';
import { OffreInternshipCondidatureComponent } from './admin/offre-internship-condidature/offre-internship-condidature.component';
import { InterviewAdminComponent } from './admin/interview-admin/interview-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FreelancerHeaderComponent } from './freelancer/freelancer-header/freelancer-header.component';
import { FreelancerCondidaturesComponent } from './freelancer/freelancer-condidatures/freelancer-condidatures.component';
import { AdminJobInterviewComponent } from './admin/interview-section/admin-job-interview/admin-job-interview.component';
import { AdminFreelanceInterviewComponent } from './admin/interview-section/admin-freelance-interview/admin-freelance-interview.component';
import { AdminInternshipInterviewComponent } from './admin/interview-section/admin-internship-interview/admin-internship-interview.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { EmployeeCondidaturesComponent } from './employee/employee-condidatures/employee-condidatures.component';
import { EmployeeFavoriteListComponent } from './employee/employee-favorite-list/employee-favorite-list.component';
import { EmployeeProfileToOthersComponent } from './employee/employee-profile-to-others/employee-profile-to-others.component';
import { EmployeeCertificationsComponent } from './employee/employee-certifications/employee-certifications.component';
import { EmployeeTrainingComponent } from './employee/employee-training/employee-training.component';
import { EmployeeExperiencesComponent } from './employee/employee-experiences/employee-experiences.component';
import { EmployeeLinguisticKnowledgeComponent } from './employee/employee-linguistic-knowledge/employee-linguistic-knowledge.component';
import { EmployeeSkillsComponent } from './employee/employee-skills/employee-skills.component';
import { EmployeeEditProfilComponent } from './employee/employee-edit-profil/employee-edit-profil.component';
import { OffreDetailsComponent } from './user/offre-details/offre-details.component';
import { OffreFreelanceDetailsComponent } from './freelancer/offre-freelance-details/offre-freelance-details.component';
import { OffreJobDetailsComponent } from './employee/offre-job-details/offre-job-details.component';
import { OffreInternshipDetailsComponent } from './intern/offre-internship-details/offre-internship-details.component';
import { InterviewJobEmployeeComponent } from './employee/interview-job-employee/interview-job-employee.component';
import { InternHeaderComponent } from './intern/intern-header/intern-header.component';
import { InternCandidaturesComponent } from './intern/intern-candidatures/intern-candidatures.component';
import { InternFavoritListComponent } from './intern/intern-favorit-list/intern-favorit-list.component';
import { InternCertificationsComponent } from './intern/intern-certifications/intern-certifications.component';
import { InternTrainingsComponent } from './intern/intern-trainings/intern-trainings.component';
import { InternExperiencesComponent } from './intern/intern-experiences/intern-experiences.component';
import { InternLinguisticKnowledgesComponent } from './intern/intern-linguistic-knowledges/intern-linguistic-knowledges.component';
import { InternSkillsComponent } from './intern/intern-skills/intern-skills.component';
import { InternEditProfileComponent } from './intern/intern-edit-profile/intern-edit-profile.component';
import { InternProfileToOthersComponent } from './intern/intern-profile-to-others/intern-profile-to-others.component';
import { EmployeeInterviewComponent } from './employee-interview/employee-interview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InterviewUserComponent } from './shared/interview-user/interview-user.component';
import { OrderByPipe } from './order-by.pipe';
import {PopoverModule} from "ngx-smart-popover";
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { FreelancerCertificationsComponent } from './freelancer/freelancer-certifications/freelancer-certifications.component';
import { FreelancerExperiencesComponent } from './freelancer/freelancer-experiences/freelancer-experiences.component';
import { FreelancerFavoriteListComponent } from './freelancer/freelancer-favorite-list/freelancer-favorite-list.component';
import { FreelancerLinguisticKnowledgeComponent } from './freelancer/freelancer-linguistic-knowledge/freelancer-linguistic-knowledge.component';
import { FreelancerProfileToOthersComponent } from './freelancer/freelancer-profile-to-others/freelancer-profile-to-others.component';
import { FreelancerSkillsComponent } from './freelancer/freelancer-skills/freelancer-skills.component';
import { FreelancerTrainingComponent } from './freelancer/freelancer-training/freelancer-training.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FreelancerEditProfiComponent } from './freelancer/freelancer-edit-profi/freelancer-edit-profi.component';
import { FreelanceOffreInprogressComponent } from './freelancer/freelance-offre-inprogress/freelance-offre-inprogress.component';
import { FreelanceOffreEndedComponent } from './freelancer/freelance-offre-ended/freelance-offre-ended.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FreelanceOffresComponent } from './user/offres/freelance-offres/freelance-offres.component';
import { JobOffresComponent } from './user/offres/job-offres/job-offres.component';
import { InternOffresComponent } from './user/offres/intern-offres/intern-offres.component';
import { AllCondidatsComponent } from './user/all-condidats/all-condidats.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { CompanyDetailsComponent } from './user/company-details/company-details.component';

@NgModule({
  declarations: [
    OrderByPipe,
    AppComponent,
    IndexComponent,
    DashboardInternComponent,
    DashboardFreelancerComponent,
    DashboardAdminComponent,
    DashboardSuperadminComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent,
    SuperadminSidebarComponent,
    SuperadminHeaderComponent,
    AllDomainsComponent,
    AllCategoriesComponent,
    AllSubcategoriesComponent,
    AllLanguagesComponent,
    AllUsersComponent,
    AllOffresComponent,
    SuperadminNotificationsComponent,
    SuperadminEditProfilComponent,
    SuperadminConncectionComponent,
    AdminAddFreelanceOfferComponent,
    AdminFreelanceActiveOffersComponent,
    AdminFreelanceEndedOffersComponent,
    AdminFreelanceOffersComponent,
    AdminAddJobOfferComponent,
    AdminJobActiveOffersComponent,
    AdminJobOffersComponent,
    AdminAddInternshipOfferComponent,
    AdminInternshipActiveOffersComponent,
    AdminInternshipEndedOffersComponent,
    AdminInternshipOffersComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminEditProfilComponent,
    OffreJobCondidatureComponent,
    OffreFreelanceCondidatureComponent,
    OffreInternshipCondidatureComponent,
    InterviewAdminComponent,
    NotFoundComponent,
    FreelancerHeaderComponent,
    FreelancerCondidaturesComponent,
    AdminJobInterviewComponent,
    AdminFreelanceInterviewComponent,
    AdminInternshipInterviewComponent,
    EmployeeHeaderComponent,
    DashboardEmployeeComponent,
    EmployeeCondidaturesComponent,
    EmployeeFavoriteListComponent,
    EmployeeProfileToOthersComponent,
    EmployeeCertificationsComponent,
    EmployeeTrainingComponent,
    EmployeeExperiencesComponent,
    EmployeeLinguisticKnowledgeComponent,
    EmployeeSkillsComponent,
    EmployeeEditProfilComponent,
    OffreDetailsComponent,
    OffreFreelanceDetailsComponent,
    OffreJobDetailsComponent,
    OffreInternshipDetailsComponent,
    InterviewJobEmployeeComponent,
    InternHeaderComponent,
    InternCandidaturesComponent,
    InternFavoritListComponent,
    InternProfileToOthersComponent,
    InternCertificationsComponent,
    InternTrainingsComponent,
    InternExperiencesComponent,
    InternLinguisticKnowledgesComponent,
    InternSkillsComponent,
    InternEditProfileComponent,
    EmployeeInterviewComponent,
    InterviewUserComponent,
    FreelancerCertificationsComponent,
    FreelancerExperiencesComponent,
    FreelancerFavoriteListComponent,
    FreelancerLinguisticKnowledgeComponent,
    FreelancerProfileToOthersComponent,
    FreelancerSkillsComponent,
    FreelancerTrainingComponent,
    ForgotPasswordComponent,
    FreelancerEditProfiComponent,
    FreelanceOffreInprogressComponent,
    FreelanceOffreEndedComponent,
    FreelanceOffresComponent,
    JobOffresComponent,
    InternOffresComponent,
    AllCondidatsComponent,
    ContactUsComponent,
    AboutUsComponent,
    CompanyDetailsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    PopoverModule,
    NgProgressModule,
    NgProgressModule.withConfig({
      color: "#003d99"
    }),
    NgProgressHttpModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),

  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
