import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewUserModal } from './new-user/new-user.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  imageSrc = 'assets/Auto.png' 
  constructor(private router:Router,    
    public modalController: ModalController
    ) {

    }

  login(form:any){    
    this.router.navigate(['/tabs'])
  }

  register(){

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NewUserModal,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
