import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

// @IonicPage()
// @Component({
//   selector: 'page-menu',
//   templateUrl: 'menu.html',
// })

@IonicPage({
  // segment: 'page-menu'
})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

	rootPage ="TabsPage";

	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[]= [
		{ title:'Home!', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon:'home' },
		{ title:'Schedules', pageName: 'TabsPage', tabComponent: 'SchedulePage', index: 1, icon:'timer' },
		{ title:'Cases', pageName: 'TabsPage', tabComponent: 'CasesPage', index: 2, icon:'briefcase' },
		{ title:'Settings', pageName: 'SettingsPage', icon:'settings' },
    { title:'About', pageName: 'AboutPage', icon:'information-circle' }
		]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }

    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
        this.nav.getActiveChildNavs()[0].select(page.index);
        console.log('Else executed umdefined');
    } else {
// ('MenuPage');
    this.nav.setRoot(page.pageName, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
      // this.nav.push(page.pageName, params); Can be used as a workaround for the bug.
// this.nav.push(page.pageName, params);
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
     return;
  }

  ionViewDidLoad() {
    console.log('MenuPage');

  }

}
