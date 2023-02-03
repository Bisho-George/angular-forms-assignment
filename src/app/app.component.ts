import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('signupForm') signup : NgForm;
  selectedSub = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  submitted = false;
  onSubmit () {
    this.submitted = true;
    console.log(this.signup.value);
  }
}
