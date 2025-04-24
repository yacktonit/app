import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';

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
  IonAvatar,
  IonDatetime,
  IonCheckbox,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
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
    IonAvatar,
    IonDatetime,
    IonCheckbox,
    IonButtons,
    IonIcon
  ]
})
export class DashboardPage implements AfterViewInit {

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

  ngAfterViewInit(): void {
    this.createDoughnutChart('presenzeChart', ['Presenti', 'Assenti'], [75, 25], ['#4CAF50', '#F44336']);
    this.createDoughnutChart('votiChart', ['Promossi', 'Bocciati'], [85, 15], ['#2196F3', '#FFC107']);
    this.createDoughnutChart('scadenzeChart', ['Completate', 'Da completare'], [60, 40], ['#9C27B0', '#FF5722']);
  }

  createDoughnutChart(id: string, labels: string[], data: number[], colors: string[]) {
    const ctx = document.getElementById(id) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: colors,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }
}
