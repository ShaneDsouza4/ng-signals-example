import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ng-signals-example';

  //Create signal
  themeColor = signal('light');

  //Getting value of signal
  label = this.themeColor();

  //Runs once, along with effect
  constructor() {

    //Creating Effect to change value of 'label' by reading value of signal 'themeColor'
    //Constructor will run this 'effect' whenever there is change in Signal Value
    effect(() => {
      this.label = this.themeColor();
    })
  }

  ngOnInit(): void {

    //Set Value of Signal
    //this.themeColor.set('dark');

    //Update Value of Signal
    //this.themeColor.update(currentValue => currentValue === 'light' ? 'dark' : 'light');

    //Fetch value from signal
    //document.body.className = this.themeColor();
  }

  //Updating value of signal
  toggleDarkMode() {
    this.themeColor.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }
}
