import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListDisputesComponent } from './list-disputes/list-disputes.component';
import { GetDisputeComponent } from './get-dispute/get-dispute.component';
import { GetTokenComponent } from './get-token/get-token.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDisputesComponent,
    GetDisputeComponent,
    GetTokenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
