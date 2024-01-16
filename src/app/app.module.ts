import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HighLightDirective } from './Directives/highLight.directive';
import { BetterHighLightDirective } from './Directives/better-high-light.directive';
import { SharedModule } from './modules/shared-modules/shareedModule.module';
import { ParetComponent } from './communication/paret/paret.component';
import { ChildComponent } from './communication/child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HighLightDirective,
    BetterHighLightDirective,
    ParetComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
