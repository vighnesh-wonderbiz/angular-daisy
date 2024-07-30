import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DarkModeTogglerComponent } from './components/dark-mode-toggler/dark-mode-toggler.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { DrawerSideComponent } from './components/drawer-side/drawer-side.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapHouse, bootstrapPerson } from '@ng-icons/bootstrap-icons';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DarkModeTogglerComponent,
    HamburgerMenuComponent,
    LogoComponent,
    NavMenuComponent,
    DrawerSideComponent,
    ProfileComponent,
    SidebarComponent,
    UserProfileComponent,
    SettingsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapHouse, bootstrapPerson }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
