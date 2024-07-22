import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  flag:boolean = false;

  data = {
    to: "",
    subject: "",
    message: ""
  }

  constructor(private emailService: EmailService, private snack: MatSnackBar) { }

  doSubmitForm() {
    console.log("submit form");
    console.log("DATA : ", this.data);

    if (this.data.to == '' || this.data.subject == '' || this.data.message == '') {
      this.snack.open("fields can not be empty", "OK");
      return;
    }

    this.flag = true;
    this.emailService.sendEmail(this.data).subscribe(
      response => {
        this.flag = false;
        this.snack.open("Send success...","OK")
        console.log(response);
      },
      error => {
        this.flag =  false;
        this.snack.open("Error","OK");
        console.log(error);

      }

    )
  }

}
