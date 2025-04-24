import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; 
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonMenu,
  IonList,
  IonItem,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonMenuButton,
  IonImg,
  IonFooter,
  IonCol,
  IonRow,
  IonGrid,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-chisiamo',
  templateUrl: 'chisiamo.page.html',
  styleUrls: ['chisiamo.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonMenu,
    IonList,
    IonItem,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonMenuButton,
    IonImg,
    IonFooter,
    IonCol,
    IonRow,
    IonGrid,
  ]
})
export class ChiSiamoPage {
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

}
