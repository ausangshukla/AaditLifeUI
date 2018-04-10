import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';
import { WorkoutDetails } from './workout-details';
import { WorkoutApi } from '../../providers/workout-api';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class Workouts {

  workouts: any;
  workout: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public workout_api: WorkoutApi, 
    public respUtility: ResponseUtility) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Workouts');
    this.respUtility.trackView("Workouts");
    let loader = this.loadingController.create({
      content: 'Loading Workouts..'
    });

    loader.present();

    this.workout_api.getWorkouts().subscribe(
      workouts => {
        this.workouts = workouts;
        console.log("Loaded workouts");
      },
      error => { this.respUtility.showFailure(error); loader.dismiss(); },
      () => { loader.dismiss(); }
    );

  }

  getWorkoutDetails(workout) {
    this.respUtility.trackEvent("Workout", "Details", "click");
    this.navCtrl.push(WorkoutDetails, workout);
  }
}
