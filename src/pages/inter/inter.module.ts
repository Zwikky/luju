import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterPage } from './inter';

@NgModule({
  declarations: [
    InterPage,
  ],
  imports: [
    IonicPageModule.forChild(InterPage),
  ],
})
export class InterPageModule {}
