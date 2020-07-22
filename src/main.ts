import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
declare let Office:any;

Office.initialize = reason =>{
	 console.log('SampleAddin: initalizing office.js...');

       // bootstrap
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success: any) => {
      console.log('SampleAddin: bootstrap success', success);
    })
    .catch((error: any) => {
      console.log('SampleAddin: bootstrap error', error);
    });
   };

