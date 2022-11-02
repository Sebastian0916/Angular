import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private _snackBar: MatSnackBar) {}

  presionar() {
    // OUTLINE
    this.primaryOtuline();
    this.accentOtuline();
    this.warnOtuline();
    this.successOtuline();
    // FILLED
    this.primaryFilled()
    this.accentFilled()
    this.warnFilled()
    this.successFilled()
  }
  primaryOtuline() {
    this._snackBar.open('Buen trabajo', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'primary',
    });
  }
  accentOtuline() {
    this._snackBar.open('Gracias por participar', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'accent'
    });
  }
  warnOtuline() {
    this._snackBar.open('Error', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'warn'
    });
  }
  successOtuline() {
    this._snackBar.open('Buen trabajo ', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'success'
    });
  }
  //filled
  primaryFilled() {
    this._snackBar.open('Buen trabajo', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'primary-filled',
    });
  }
  accentFilled() {
    this._snackBar.open('Gracias por participar', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'accent-filled'
    });
  }
  warnFilled() {
    this._snackBar.open('Error', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'warn-filled'
    });
  }
  successFilled() {
    this._snackBar.open('Buen trabajo ', 'Aceptar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass:'success-filled'
    });
  }
}
