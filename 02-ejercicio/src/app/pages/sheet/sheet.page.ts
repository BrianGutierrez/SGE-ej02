import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {
  IonAvatar,
  IonBackButton,
  IonButtons, IonChip, IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonImg, IonLabel, IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonChip,
    IonAvatar,
    IonImg,
    IonLabel
  ]
})
export class SheetPage {

  personajes = [
    { id: 1, nombre: 'Amon', imagen: '/assets/img/avatar01.png' },
    { id: 2, nombre: 'Lyra', imagen: '/assets/img/avatar02.png' },
    { id: 3, nombre: 'Rex', imagen: '/assets/img/avatar03.png' }
  ];

  imagenCentral = '/assets/img/avatar01.png';

  constructor(private actionSheetCtrl: ActionSheetController) {}

  // Función para cambiar la imagen central al pulsar un chip
  cambiarImagenCentral(imagen: string) {
    this.imagenCentral = imagen;
    console.log('Avatar central cambiado a:', imagen);
  }

  // Función para abrir Action Sheet al pulsar el avatar central
  async abrirActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona un personaje',
      buttons: [
        ...this.personajes.map(personaje => ({
          text: personaje.nombre,
          handler: () => {
            this.cambiarImagenCentral(personaje.imagen);
            console.log(`Seleccionaste desde Action Sheet: ${personaje.nombre}`);
          }
        })),
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();
    console.log('Action Sheet cerrado con:', role);
  }
}

