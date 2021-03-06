import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
// @Component({
//   selector: 'page-tabs',
//   templateUrl: 'tabs.html',
// })

@IonicPage({
  segment: 'page-tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root= 'HomePage';
	tab2Root= 'SchedulePage';
	tab3Root= 'CasesPage';
	myIndex: number;
	// myIndex=1;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
