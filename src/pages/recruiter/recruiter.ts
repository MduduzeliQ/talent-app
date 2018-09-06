import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoutPage } from '../scout/scout';

/**
 * Generated class for the RecruiterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruiter',
  templateUrl: 'recruiter.html',
})
export class RecruiterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ScoutHome(){
    this.navCtrl.push(ScoutPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecruiterPage');
  }

}
