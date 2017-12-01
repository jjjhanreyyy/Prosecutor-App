import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

	rootPage ="TabsPage";

	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[]= [
		{ title:'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon:'home' },
		{ title:'Schedules', pageName: 'TabsPage', tabComponent: 'SchedulePage', index: 1, icon:'timer' },
		{ title:'Cases', pageName: 'TabsPage', tabComponent: 'CasesPage', index: 2, icon:'briefcase' },
		{ title:'Settings', pageName: 'SettingsPage', icon:'settings' }
		]



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }

    if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
        this.nav.getActiveChildNavs()[0].select(page.index);
        console.log('Else executed umdefined');
    } else {
      this.nav.setRoot(page.pageName, params);
      console.log('Else executed');
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  ionViewDidLoad() {
    console.log('MenuPage');
  }

}
