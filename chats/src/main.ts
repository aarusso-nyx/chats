import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';

import { AppModule } from './app/app.module';


Amplify.configure(aws_exports);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
