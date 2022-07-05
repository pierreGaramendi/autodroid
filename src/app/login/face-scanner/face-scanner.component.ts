import { Component, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  templateUrl: 'face-scanner.component.html',
  selector: 'face-modal-page',
  styleUrls: ['face-scanner.component.scss']
})
export class FaceScannerModal {

  source = timer(2000);
  isSync = false;
  showSpiner = false;
  subscribe;
  imageSrc = 'assets/Reconoc.png' 
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
      message: 'Escaneando Rostro...',
      duration: 2000
    });
    
    loading.present();
  }

}