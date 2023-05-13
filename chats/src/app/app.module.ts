import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { ChatComponent } from './chat/chat.component';
import { SubsComponent } from './subs/subs.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    ChatComponent,
    SubsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
