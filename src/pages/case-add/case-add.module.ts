import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseAddPage } from './case-add';

@NgModule({
  declarations: [
    CaseAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseAddPage),
  ],
})
export class CaseAddPageModule {}
