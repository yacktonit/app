import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  IonAccordion,
  IonAccordionGroup,
  IonCheckbox,
  IonTextarea,
  IonInput
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    IonAccordion,
    IonAccordionGroup,
    IonCheckbox,
    IonTextarea,
    IonInput
  ]
})
export class HomePage {
  constructor(private router: Router) {}  

  navigateToCorsi() {
    this.router.navigate(['/corsi']);  
  }

  navigateToHome() {
    this.router.navigate(['/home']);  
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

  openTest() {
    window.open('https://forms.gle/vbRLt1Bzpp2Xfrkb9', '_blank');
  }

  submitForm() {
    alert('La tua domanda è stata inviata!');
  }
  
}
