import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { ModalPage } from 'src/app/tab1/modals/modal.component';
import { FaceScannerModal } from '../face-scanner/face-scanner.component';
import { FingerScannerModal } from '../finger-scanner/finger-scanner.component';

@Component({
  templateUrl: 'new-user.component.html',
  selector: 'modal-page',
  styleUrls: ['new-user.component.scss']
})
export class NewUserModal {

  source = timer(4000);
  isSync = false;
  showSpiner = false;
  subscribe;

  constructor(private modalCtrl: ModalController) { }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  beginSync() {

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: FingerScannerModal,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async openModalNewCar() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async openModalFace() {
    const modal = await this.modalCtrl.create({
      component: FaceScannerModal,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

}