import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

    public formProfile: FormGroup = this._formBuilder.group({
        name: ['', Validators.required],
        age: [''],
        favoriteMovie: [''],
        favoriteGenre: ['Horror']
    });

    public genres = ['Horror', 'Adventure', 'Sci-Fi', 'Fantasy', 'Romance', 'Comedy'];

    constructor(
        private _formBuilder: FormBuilder,
        private _snackBar: MatSnackBar
        ) { }

    public ngOnInit() {
        this.carregarPerfil();
    }

    public carregarPerfil() {
        const perfil = JSON.parse(localStorage.getItem('user'));

        if (perfil) {
            this.formProfile.controls.name.setValue(perfil.name);
            this.formProfile.controls.age.setValue(perfil.age);
            this.formProfile.controls.favoriteMovie.setValue(perfil.favoriteMovie);
            this.formProfile.controls.favoriteGenre.setValue(perfil.favoriteGenre);
        }

    }

    public saveProfile() {
        const user = {
            name: this.formProfile.controls.name.value,
            age: this.formProfile.controls.age.value,
            favoriteMovie: this.formProfile.controls.favoriteMovie.value,
            favoriteGenre: this.formProfile.controls.favoriteGenre.value
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        this._snackBar.open('Profile saved successfully!', '', {
            duration: 1000,
            panelClass: 'success'
        });
    }
}