// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "<FIREBASE_API_KEY>",
    authDomain: "rockit-fb4ec.firebaseapp.com",
    databaseURL: "https://rockit-fb4ec.firebaseio.com",
    projectId: "rockit-fb4ec",
    storageBucket: "rockit-fb4ec.appspot.com",
    messagingSenderId: "<FIREBASE_API_MESSAGE>"
  }
};