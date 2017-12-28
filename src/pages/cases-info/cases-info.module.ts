import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasesInfoPage } from './cases-info';

@NgModule({
  declarations: [
    CasesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CasesInfoPage),
  ],
})
export class CasesInfoPageModule {}
