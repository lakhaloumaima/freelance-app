import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { DashboardInternComponent } from './intern/dashboard-intern/dashboard-intern.component';
import { DashboardSuperadminComponent } from './superadmin/dashboard-superadmin/dashboard-superadmin.component';
import { IndexComponent } from './user/index/index.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AllDomainsComponent } from './superadmin/all-domains/all-domains.component';
import { AllCategoriesComponent } from './superadmin/all-categories/all-categories.component';
import { AllSubcategoriesComponent } from './superadmin/all-subcategories/all-subcategories.component';
import { AllLanguagesComponent } from './superadmin/all-languages/all-languages.component';
import { AllUsersComponent } from './superadmin/all-users/all-users.component';
import { AllOffresComponent } from './superadmin/all-offres/all-offres.component';
import { SuperadminEditProfilComponent } from './superadmin/superadmin-edit-profil/superadmin-edit-profil.component';
import { SuperadminNotificationsComponent } from './superadmin/superadmin-notifications/superadmin-notifications.component';
import { AdminGuard } from './guards/admin.guard';
import { SuperadminGuard } from './guards/superadmin.guard';
import { FreelancerGuard } from './guards/freelancer.guard';
import { EmployeeGuard } from './guards/employee.guard';
import { InternGuard } from './guards/intern.guard';
import { AdminAddFreelanceOfferComponent } from './admin/freelance-offers/admin-add-freelance-offer/admin-add-freelance-offer.component';
import { AdminAddJobOfferComponent } from './admin/job-offers/admin-add-job-offer/admin-add-job-offer.component';
import { AdminAddInternshipOfferComponent } from './admin/internship-offers/admin-add-internship-offer/admin-add-internship-offer.component';
import { AdminJobActiveOffersComponent } from './admin/job-offers/admin-job-active-offers/admin-job-active-offers.component';
import { AdminFreelanceActiveOffersComponent } from './admin/freelance-offers/admin-freelance-active-offers/admin-freelance-active-offers.component';
import { AdminInternshipActiveOffersComponent } from './admin/internship-offers/admin-internship-active-offers/admin-internship-active-offers.component';
import { AdminFreelanceEndedOffersComponent } from './admin/freelance-offers/admin-freelance-ended-offers/admin-freelance-ended-offers.component';
import { AdminInternshipEndedOffersComponent } from './admin/internship-offers/admin-internship-ended-offers/admin-internship-ended-offers.component';
import { AdminFreelanceOffersComponent } from './admin/freelance-offers/admin-freelance-offers/admin-freelance-offers.component';
import { AdminInternshipOffersComponent } from './admin/internship-offers/admin-internship-offers/admin-internship-offers.component';
import { AdminEditProfilComponent } from './admin/admin-edit-profil/admin-edit-profil.component';
import { AdminJobOffersComponent } from './admin/job-offers/admin-job-offers/admin-job-offers.component';
import { OffreJobCondidatureComponent } from './admin/offre-job-condidature/offre-job-condidature.component';
import { OffreFreelanceCondidatureComponent } from './admin/offre-freelance-condidature/offre-freelance-condidature.component';
import { OffreInternshipCondidatureComponent } from './admin/offre-internship-condidature/offre-internship-condidature.component';
import { InterviewAdminComponent } from './admin/interview-admin/interview-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminFreelanceInterviewComponent } from './admin/interview-section/admin-freelance-interview/admin-freelance-interview.component';
import { AdminInternshipInterviewComponent } from './admin/interview-section/admin-internship-interview/admin-internship-interview.component';
import { AdminJobInterviewComponent } from './admin/interview-section/admin-job-interview/admin-job-interview.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { EmployeeCondidaturesComponent } from './employee/employee-condidatures/employee-condidatures.component';
import { EmployeeFavoriteListComponent } from './employee/employee-favorite-list/employee-favorite-list.component';
import { EmployeeExperiencesComponent } from './employee/employee-experiences/employee-experiences.component';
import { EmployeeCertificationsComponent } from './employee/employee-certifications/employee-certifications.component';
import { EmployeeLinguisticKnowledgeComponent } from './employee/employee-linguistic-knowledge/employee-linguistic-knowledge.component';
import { EmployeeSkillsComponent } from './employee/employee-skills/employee-skills.component';
import { EmployeeTrainingComponent } from './employee/employee-training/employee-training.component';
import { EmployeeEditProfilComponent } from './employee/employee-edit-profil/employee-edit-profil.component';
import { OffreJobDetailsComponent } from './employee/offre-job-details/offre-job-details.component';
import { OffreFreelanceDetailsComponent } from './freelancer/offre-freelance-details/offre-freelance-details.component';
import { OffreInternshipDetailsComponent } from './intern/offre-internship-details/offre-internship-details.component';

import { InternCandidaturesComponent } from './intern/intern-candidatures/intern-candidatures.component';
import { InternCertificationsComponent } from './intern/intern-certifications/intern-certifications.component';
import { InternExperiencesComponent } from './intern/intern-experiences/intern-experiences.component';
import { InternFavoritListComponent } from './intern/intern-favorit-list/intern-favorit-list.component';
import { InternLinguisticKnowledgesComponent } from './intern/intern-linguistic-knowledges/intern-linguistic-knowledges.component';
import { InternSkillsComponent } from './intern/intern-skills/intern-skills.component';
import { InternTrainingsComponent } from './intern/intern-trainings/intern-trainings.component';
import { InternEditProfileComponent } from './intern/intern-edit-profile/intern-edit-profile.component';
import { InternProfileToOthersComponent } from './intern/intern-profile-to-others/intern-profile-to-others.component';
import { InterviewUserComponent } from './shared/interview-user/interview-user.component';
import { FreelancerHeaderComponent } from './freelancer/freelancer-header/freelancer-header.component';
import { FreelancerCondidaturesComponent } from './freelancer/freelancer-condidatures/freelancer-condidatures.component';
import { FreelancerFavoriteListComponent } from './freelancer/freelancer-favorite-list/freelancer-favorite-list.component';
import { FreelancerExperiencesComponent } from './freelancer/freelancer-experiences/freelancer-experiences.component';
import { FreelancerCertificationsComponent } from './freelancer/freelancer-certifications/freelancer-certifications.component';
import { FreelancerLinguisticKnowledgeComponent } from './freelancer/freelancer-linguistic-knowledge/freelancer-linguistic-knowledge.component';
import { FreelancerTrainingComponent } from './freelancer/freelancer-training/freelancer-training.component';
import { FreelancerSkillsComponent } from './freelancer/freelancer-skills/freelancer-skills.component';
import { FreelancerProfileToOthersComponent } from './freelancer/freelancer-profile-to-others/freelancer-profile-to-others.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FreelancerEditProfiComponent } from './freelancer/freelancer-edit-profi/freelancer-edit-profi.component';
import { FreelanceOffreInprogressComponent } from './freelancer/freelance-offre-inprogress/freelance-offre-inprogress.component';
import { FreelanceOffreEndedComponent } from './freelancer/freelance-offre-ended/freelance-offre-ended.component';
import { EmployeeProfileToOthersComponent } from './employee/employee-profile-to-others/employee-profile-to-others.component';
import { OffreDetailsComponent } from './user/offre-details/offre-details.component';
import { FreelanceOffresComponent } from './user/offres/freelance-offres/freelance-offres.component';
import { JobOffresComponent } from './user/offres/job-offres/job-offres.component';
import { InternOffresComponent } from './user/offres/intern-offres/intern-offres.component';
import { AllCondidatsComponent } from './user/all-condidats/all-condidats.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { CompanyDetailsComponent } from './user/company-details/company-details.component';

const routes: Routes = [

/*********************************Users Components *************************/
  {path:'',component:IndexComponent },
  {path:'index',component:IndexComponent },
  {path:'register',component:RegisterComponent },
  {path:':token/reset', component: ResetPasswordComponent},
  {path:'login',component:LoginComponent},
  {path:'not-found',component:NotFoundComponent},
  {path: 'interview-user/:receiver_id/:candidature_id/:offre_id', component: InterviewUserComponent },
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'freelance-offres',component:FreelanceOffresComponent},
  {path:'job-offres',component:JobOffresComponent},
  {path:'intern-offres',component:InternOffresComponent},
  {path:'All-Condidats',component:AllCondidatsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'company-details/:id',component:CompanyDetailsComponent},
  /*{path:'app-offre-details/:user_id',component:OffreDetailsComponent},*


/*********************************Admin Components *************************/
  {path:'admin',component:DashboardAdminComponent, canActivate:[AdminGuard] },
  {path:'edit-profil',component:AdminEditProfilComponent, canActivate:[AdminGuard] },
  {path: 'interview-admin/:receiver_id/:candidature_id/:offre_id', component: InterviewAdminComponent },
  /*--------------Admin Components Interview Section ------------*/
  {path:'interview-freelance-admin',component:AdminFreelanceInterviewComponent, canActivate:[AdminGuard] },
  {path:'interview-internship-admin',component:AdminInternshipInterviewComponent, canActivate:[AdminGuard] },
  {path:'interview-job-admin',component:AdminJobInterviewComponent, canActivate:[AdminGuard] },

  /*--------------Admin Components All Condidatures ------------*/
  {path:'offers-job-Condidatures',component:OffreJobCondidatureComponent, canActivate:[AdminGuard] },
  {path:'offers-freelance-Condidatures',component:OffreFreelanceCondidatureComponent, canActivate:[AdminGuard] },
  {path:'offers-internship-Condidatures',component:OffreInternshipCondidatureComponent, canActivate:[AdminGuard] },

  /*--------------Admin Components All Offres -----------------*/
  {path:'admin-job-offers',component:AdminJobOffersComponent, canActivate:[AdminGuard] },
  {path:'admin-freelance-offers',component:AdminFreelanceOffersComponent, canActivate:[AdminGuard] },
  {path:'admin-internship-offers',component:AdminInternshipOffersComponent, canActivate:[AdminGuard] },

  /*--------------Admin Components Add Offres -----------------*/
  {path:'add-freelance-offer',component:AdminAddFreelanceOfferComponent, canActivate:[AdminGuard] },
  {path:'add-job-offer',component:AdminAddJobOfferComponent, canActivate:[AdminGuard] },
  {path:'add-internship-offer',component:AdminAddInternshipOfferComponent, canActivate:[AdminGuard] },

  /*--------------Admin Components Active Offres -----------------*/
  {path:'admin-job-active-offers',component:AdminJobActiveOffersComponent, canActivate:[AdminGuard] },
  {path:'admin-freelance-active-offers',component:AdminFreelanceActiveOffersComponent, canActivate:[AdminGuard] },
  {path:'admin-internship-active-offers',component:AdminInternshipActiveOffersComponent, canActivate:[AdminGuard] },

  /*--------------Admin Components Ended Offres -----------------*/
  {path:'admin-freelance-ended-offers',component:AdminFreelanceEndedOffersComponent, canActivate:[AdminGuard] },
  {path:'admin-internship-ended-offers',component:AdminInternshipEndedOffersComponent, canActivate:[AdminGuard] },



/*********************************intern Components ************************/
  {path:'intern',component:DashboardInternComponent, canActivate:[InternGuard]},
  {path:'offre-intenrship-details/:id',component:OffreInternshipDetailsComponent},

/*********************************employee Components **********************/
  {path:'employee',component:DashboardEmployeeComponent, canActivate:[EmployeeGuard]},
  {path:'header-employee',component:EmployeeHeaderComponent, canActivate:[EmployeeGuard]},
  {path:'employee-condidatures',component:EmployeeCondidaturesComponent, canActivate:[EmployeeGuard]},
  {path:'employee-favorite-list',component:EmployeeFavoriteListComponent, canActivate:[EmployeeGuard]},
  {path:'employee-experiences',component:EmployeeExperiencesComponent, canActivate:[EmployeeGuard]},
  {path:'employee-certifications',component:EmployeeCertificationsComponent, canActivate:[EmployeeGuard]},
  {path:'employee-linguistic-knowledge',component:EmployeeLinguisticKnowledgeComponent, canActivate:[EmployeeGuard]},
  {path:'employee-skills',component:EmployeeSkillsComponent, canActivate:[EmployeeGuard]},
  {path:'employee-training',component:EmployeeTrainingComponent, canActivate:[EmployeeGuard]},
  {path:'employee-profil-to-others/:id',component:EmployeeProfileToOthersComponent},

  {path:'edit-employee',component:EmployeeEditProfilComponent, canActivate:[EmployeeGuard] },
  {path:'offre-job-details/:id',component:OffreJobDetailsComponent},








/*********************************intern Components ************************/
  {path:'intern',component:DashboardInternComponent, canActivate:[InternGuard]},
  {path:'intern-candidatures',component:InternCandidaturesComponent, canActivate:[InternGuard]},
  {path:'intern-certifications',component:InternCertificationsComponent, canActivate:[InternGuard]},
  {path:'intern-experiences',component:InternExperiencesComponent, canActivate:[InternGuard]},
  {path:'intern-favorit-list',component:InternFavoritListComponent, canActivate:[InternGuard]},
  {path:'intern-linguistic-knowledges',component:InternLinguisticKnowledgesComponent, canActivate:[InternGuard]},
  {path:'intern-profile-to-others/:id',component:InternProfileToOthersComponent},
  {path:'intern-skills',component:InternSkillsComponent, canActivate:[InternGuard]},
  {path:'intern-trainings',component:InternTrainingsComponent, canActivate:[InternGuard]},
  {path:'offre-internship-details/:id',component:OffreInternshipDetailsComponent},
  {path:'edit-intern',component:InternEditProfileComponent, canActivate:[InternGuard] },


/*********************************employee Components **********************/
  {path:'employee',component:DashboardEmployeeComponent, canActivate:[EmployeeGuard]},
/*********************************freelancer Components ********************/
  {path:'freelancer',component:DashboardFreelancerComponent, canActivate:[FreelancerGuard]},
  {path:'freelance-profile-to-others/:id',component:InternProfileToOthersComponent},
  {path:'header-freelancer',component:FreelancerHeaderComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-condidatures',component:FreelancerCondidaturesComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-favorite-list',component:FreelancerFavoriteListComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-experiences',component:FreelancerExperiencesComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-certifications',component:FreelancerCertificationsComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-linguistic-knowledge',component:FreelancerLinguisticKnowledgeComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-skills',component:FreelancerSkillsComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-training',component:FreelancerTrainingComponent, canActivate:[FreelancerGuard]},
  {path:'freelancer-profil-to-others/:id',component:FreelancerProfileToOthersComponent},
  {path:'edit-freelance',component:FreelancerEditProfiComponent, canActivate:[FreelancerGuard] },
  {path:'freelancer-offre-inprogress',component:FreelanceOffreInprogressComponent, canActivate:[FreelancerGuard] },
  {path:'freelancer-offre-ended',component:FreelanceOffreEndedComponent, canActivate:[FreelancerGuard] },


/*********************************superadmin Components ********************/
  {path:'superadmin',component:DashboardSuperadminComponent, canActivate:[SuperadminGuard]},
  {path:'all-domains',component:AllDomainsComponent, canActivate:[SuperadminGuard]},
  {path:'all-categories',component:AllCategoriesComponent, canActivate:[SuperadminGuard]},
  {path:'all-subcategories',component:AllSubcategoriesComponent, canActivate:[SuperadminGuard]},
  {path:'all-languages',component:AllLanguagesComponent, canActivate:[SuperadminGuard]},
  {path:'all-users',component:AllUsersComponent, canActivate:[SuperadminGuard]},
  {path:'all-offres',component:AllOffresComponent, canActivate:[SuperadminGuard]},
  {path:'edit-superadmin',component:SuperadminEditProfilComponent, canActivate:[SuperadminGuard]},
  {path:'notifications-superadmin',component:SuperadminNotificationsComponent, canActivate:[SuperadminGuard]},
  {path:'offre-freelance-details/:id',component:OffreFreelanceDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
