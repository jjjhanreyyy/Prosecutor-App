var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
// @IonicPage()
// @Component({
//   selector: 'page-menu',
//   templateUrl: 'menu.html',
// })
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = "TabsPage";
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
            { title: 'Schedules', pageName: 'TabsPage', tabComponent: 'SchedulePage', index: 1, icon: 'timer' },
            { title: 'Cases', pageName: 'TabsPage', tabComponent: 'CasesPage', index: 2, icon: 'briefcase' },
            { title: 'Settings', pageName: 'SettingsPage', icon: 'settings' },
            { title: 'About', pageName: 'AboutPage', icon: 'information-circle' }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.index) {
            params = { tabIndex: page.index };
        }
        if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
            console.log('Else executed umdefined');
        }
        else {
            // ('MenuPage');
            this.nav.setRoot(page.pageName, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
            // this.nav.push(page.pageName, params); Can be used as a workaround for the bug.
            console.log('Else executed');
        }
    };
    MenuPage.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('MenuPage');
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        IonicPage({}),
        Component({
            selector: 'page-menu',
            templateUrl: 'menu.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.js.map