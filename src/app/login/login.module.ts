import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { NewUserModal } from './new-user/new-user.component';
import { FingerScannerModal } from './finger-scanner/finger-scanner.component';
import { FaceScannerModal } from './face-scanner/face-scanner.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage,NewUserModal,FingerScannerModal,FaceScannerModal]
})
export class LoginPageModule {}
