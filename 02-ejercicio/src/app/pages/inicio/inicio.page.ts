import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  IonAvatar,
  IonButtons,
  IonContent, IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle, IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    IonImg,
    IonAvatar,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader
  ]
})
export class InicioPage {
  characters = [
    { name: 'Amon', img: '/assets/img/avatar01.png' },
    { name: 'Kael', img: '/assets/img/avatar02.png' },
    { name: 'Ryn',  img: '/assets/img/avatar03.png' },
  ];

  constructor(private alertCtrl: AlertController, private router: Router) {}

  async goToSheetAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Ir a la página Sheet',
      message: '¿Quieres ir a la página Sheet?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'OK',
          handler: () => this.router.navigateByUrl('/sheet'),
        },
      ],
    });

    await alert.present();
  }
}

