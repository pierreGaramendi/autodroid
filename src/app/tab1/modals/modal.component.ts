import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  templateUrl: 'modal.component.html',
  selector: 'modal-page',
})
export class ModalPage {

  source = timer(4000);
  isSync = false;
  showSpiner = false;
  subscribe;

  constructor(private modalCtrl: ModalController) { }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  beginSync() {
    this.showSpiner = true;
    this.subscribe = this.source.subscribe(() => {
      this.isSync = true;
      this.showSpiner = false;
    });
  }

}