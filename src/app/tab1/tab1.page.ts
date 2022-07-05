import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modals/modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}
  
   async openModal() {
     const modal = await this.modalController.create({
       component: ModalPage,
       cssClass: 'my-custom-class'
     });
     return await modal.present();
   }

}
