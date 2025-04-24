import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonCheckbox,
  IonMenu,
  IonList,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonMenuButton,
  IonImg,
  IonFooter,
  IonCol,
  IonRow,
  IonGrid,
  IonText,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accesso',
  templateUrl: 'accesso.page.html',
  styleUrls: ['accesso.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonInput,
    IonCheckbox,
    IonMenu,
    IonList,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonMenuButton,
    IonImg,
    IonFooter,
    IonCol,
    IonRow,
    IonGrid,
    IonText,
  ],
})
export class AccessoPage {
  authSegment: 'login' | 'register' = 'login';
  acceptTerms = false;
  email: string = '';
  password: string = '';
  nome: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Login inviato!');
    this.router.navigate(['/dashboard']);
  }

  register() {
    if (this.acceptTerms) {
      console.log('Registrazione inviata!');
      this.router.navigate(['/dashboard']);
    } else {
      console.warn('Devi accettare i termini per registrarti');
    }
  }

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

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
