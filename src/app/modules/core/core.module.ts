import { NgModule } from "@angular/core";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';

@NgModule({
    declarations: [
        TopBarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        TopBarComponent
    ],
    providers: [
        MoviesService
    ]
})
export class CoreModule { }