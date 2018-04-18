import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content } from 'ionic-angular';
import { ResponseUtility } from '../../providers/response-utility';
import { WorkoutDetails } from './workout-details';
import { WorkoutApi } from '../../providers/workout-api';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html',
})
export class Workouts {

  @ViewChild(Content) content: Content;
  public showNavbar: boolean;
  
  workouts: any;
  workout: any;
  fitness_test_id: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingController: LoadingController,
    public workout_api: WorkoutApi, 
    public respUtility: ResponseUtility) {
      if(this.navParams.data["fitness_test_id"] !== null) {
        this.fitness_test_id = this.navParams.data["fitness_test_id"];
      }
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Workouts');
    this.respUtility.trackView("Workouts");
    let loader = this.loadingController.create({
      content: 'Loading Workouts..'
    });

    loader.present();

    this.workout_api.getWorkouts(this.fitness_test_id).subscribe(
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

  public hideNavbar(): void {
    this.showNavbar = false;
    // You should resize the content to use the space left by the navbar
    this.content.resize();
  }
}
