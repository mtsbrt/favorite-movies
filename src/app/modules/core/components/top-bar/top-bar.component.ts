import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    public showUser = this.isOnProfilePage();

    constructor(
        private _router: Router
    ) { }

    public ngOnInit() {

    }

    public isOnProfilePage(): boolean {
        if (this._router.url.includes('profile')) {
            return true;
        }
        return false;
    }

    public redirectToProfile() {
        this._router.navigateByUrl('/profile');
    }

}