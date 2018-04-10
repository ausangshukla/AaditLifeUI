import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Keyboard } from '@ionic-native/keyboard';

import { SentryErrorHandler } from '../services/sentry-errorhandler'
import { CodePush } from '@ionic-native/code-push';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { PasswordReset } from '../pages/login/password-reset'

import { IonicStorageModule } from '@ionic/storage';
import { Angular2TokenService } from 'angular2-token';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

import { Users } from '../pages/users/users';
import { UserTabs } from '../pages/users/user-tabs';
import { UserForm } from '../pages/users/user-form';
import { UserDetails } from '../pages/users/user-details';
import { PhoneVerificationPage } from '../pages/users/phone-verification';
import { RegisterPage } from '../pages/users/register';

import { FitnessTests } from '../pages/fitness-tests/fitness-tests';
import { FitnessTestDetails } from '../pages/fitness-tests/fitness-test-details';
import { Workouts } from '../pages/workouts/workouts';
import { WorkoutDetails } from '../pages/workouts/workout-details';


import { AboutPage } from '../pages/static/about';
import { HelpPage } from '../pages/static/help';
import { TermsPage } from '../pages/static/terms';
import { ContactPage } from '../pages/static/contact';

import { Diagnostic } from '@ionic-native/diagnostic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { UserApi } from '../providers/user-api'
import { WorkoutApi } from '../providers/workout-api'
import { FitnessTestApi } from '../providers/fitness-test-api'
import { Config } from '../providers/config'

import { ResponseUtility } from '../providers/response-utility'
import { Push } from '@ionic-native/push';
import { TitleCasePipe } from '../pipes/title-case/title-case';
import { UtcDatePipe } from '../pipes/utc-date/utc-date';
import { LoginProvider } from '../providers/login-provider';
import { HomeEvents } from '../providers/home-events';
import { GoogleAnalytics } from '@ionic-native/google-analytics';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    PasswordReset,
    Users,
    UserTabs,
    UserForm,
    UserDetails,
    FitnessTests,
    FitnessTestDetails,
    Workouts,
    WorkoutDetails,
    PhoneVerificationPage,
    RegisterPage,
    TitleCasePipe,
    UtcDatePipe,
    AboutPage,
    HelpPage,
    ContactPage,
    TermsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MomentModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    PasswordReset,
    Users,
    UserTabs,
    UserForm,
    UserDetails,
    PhoneVerificationPage,
    RegisterPage,
    FitnessTests,
    FitnessTestDetails,
    Workouts,
    WorkoutDetails,
    AboutPage,
    HelpPage,
    ContactPage,
    TermsPage
  ],

  providers: [
    Push,
    CodePush,
    GoogleAnalytics,
    Config,
    LoginProvider,
    UserApi,
    FitnessTestApi,
    WorkoutApi,
    ResponseUtility,
    StatusBar,
    SplashScreen,
    Keyboard,
    Angular2TokenService,
    Camera,
    Diagnostic,
    File,
    FilePath,
    Transfer,
    HomeEvents,
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ]
})
export class AppModule { }

