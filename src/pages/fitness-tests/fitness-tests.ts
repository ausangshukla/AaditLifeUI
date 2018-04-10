import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';
import { FitnessTestDetails } from './fitness-test-details';
import { FitnessTestApi } from '../../providers/fitness-test-api';

@Component({
  selector: 'fitness-tests',
  templateUrl: 'fitness-tests.html',
})
export class FitnessTests {

  fitness_tests: any;
  fitness_test: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public fitness_test_api: FitnessTestApi, 
    public respUtility: ResponseUtility) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter FitnessTests');
    this.respUtility.trackView("FitnessTests");
    let loader = this.loadingController.create({
      content: 'Loading FitnessTests..'
    });

    loader.present();

    this.fitness_test_api.getFitnessTests().subscribe(
      fitness_tests => {
        this.fitness_tests = fitness_tests;
        console.log("Loaded fitness_tests");
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );

  }

  getFitnessTestDetails(fitness_test) {
    this.respUtility.trackEvent("FitnessTest", "Details", "click");
    this.navCtrl.push(FitnessTestDetails, fitness_test);
  }
}
