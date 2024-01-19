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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { Operators2Component } from './rxjs/operators2/operators2.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingComponent } from './routing/routing/routing.component';
import { MyRoutingModeule } from './my-routing.module';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
// import { CustomService } from './services/custom.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HighLightDirective,
    BetterHighLightDirective,
    ParetComponent,
    ChildComponent,
    ObservableComponent,
    OperatorsComponent,
    Operators2Component,
    RoutingComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MyRoutingModeule,
    ReactiveFormsModule
  ],
  providers: [
    // CustomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
