import { NgModule } from "@angular/core";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        TopBarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        TopBarComponent
    ]
})
export class CoreModule { }