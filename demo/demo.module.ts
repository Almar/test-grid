import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestGridModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, TestGridModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}