// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyA6jFA_x4MCXTs73xBefB3Vji6FeIg4vj4',
    authDomain: 'myapps-angular-kanaiev.firebaseapp.com',
    databaseURL: 'https://myapps-angular-kanaiev.firebaseio.com',
    projectId: 'myapps-angular-kanaiev',
    storageBucket: 'myapps-angular-kanaiev.appspot.com',
    messagingSenderId: '291940754767',
    appId: '1:291940754767:web:00aea3704fc52bb5ca913a',
    measurementId: 'G-L4V7GEW4K2'
  },
  database: 'firebase',
  socialAuthEnabled: true,
  API: 'http://localhost:4200',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
