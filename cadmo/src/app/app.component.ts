import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonButtons
  ]
})
export class AppComponent {
  isLoggedIn = false; 

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToCorsi() {
    this.router.navigate(['/corsi']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToChiSiamo() {
    this.router.navigate(['/chisiamo']);
  }

  navigateToContatti() {
    this.router.navigate(['/contatti']);
  }

  navigateToImpostazioni() {
    this.router.navigate(['/impostazioni']);
  }

  navigateToAccesso() {
    this.router.navigate(['/accesso']);
  }

  logout() {
    this.router.navigate(['/accesso']);
  }
}
