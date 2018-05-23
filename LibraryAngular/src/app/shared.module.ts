import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    ReactiveFormsModule,
    GridModule,
    DialogModule,
    ButtonsModule,
    DropDownsModule,
    DateInputsModule
  ],
  exports:
    [
      HttpClientModule,
      HttpClientJsonpModule,
      CommonModule,
      ReactiveFormsModule,
      GridModule,
      DialogModule,
      ButtonsModule,
      DropDownsModule,
      DateInputsModule
    ]
})
  
export class SharedModule {
}
