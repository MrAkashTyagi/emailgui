import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  constructor(private snakbar: MatSnackBar){

  }


  btnClick(){
    console.log("btn clicked");
    this.snakbar.open("Hey welcome to this snackbar","OK")
  }

}
