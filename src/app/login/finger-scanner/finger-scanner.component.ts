import { Component, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  templateUrl: 'finger-scanner.component.html',
  selector: 'modal-page',
  styleUrls: ['finger-scanner.component.scss']
})
export class FingerScannerModal {

  source = timer(2000);
  isSync = false;
  showSpiner = false;
  subscribe;

  constructor(private modalCtrl: ModalController,private loadingCtrl: LoadingController) {
    this.beginSync();
   }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  beginSync() {
    this.showSpiner = true;
    this.subscribe = this.source.subscribe(() => {      
      this.showLoading();
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Escaneando huella...',
      duration: 3000
    });
    
    loading.present();
  }

}