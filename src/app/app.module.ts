import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './modules/profile/profile.module';
import { CoreModule } from './modules/core/core.module';
import { CommonModule } from '@angular/common';
import { MovieListModule } from './modules/movie-list/movie-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfileModule,
    CoreModule,
    MovieListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
