import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule} from "@angular/material/select";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DeviceComponent } from './components/device/device.component';
import { TotalEnergySpentComponent } from './components/total-energy-spent/total-energy-spent.component';
import { ButtonContinueComponent } from './shared/components/button-continue/button-continue.component';
import { DeviceCardComponent } from './shared/components/device-card/device-card.component';
import { ModalMessageComponent } from './shared/components/modal-message/modal-message.component';
import { InputComponent } from './shared/components/input/input.component';
import { DailyCostComponent } from './components/daily-cost/daily-cost.component';
import { TimeBandComponent } from './components/time-band/time-band.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DeviceComponent,
    TotalEnergySpentComponent,
    ButtonContinueComponent,
    DeviceCardComponent,
    ModalMessageComponent,
    InputComponent,
    DailyCostComponent,
    TimeBandComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
