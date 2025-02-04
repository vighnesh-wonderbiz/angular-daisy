import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserformComponent } from './pages/userform/userform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'form', component: UserformComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
