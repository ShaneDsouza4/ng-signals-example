import { Component, OnInit, signal } from '@angular/core';
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

  ngOnInit(): void {

    //Set Value of Signal
    //this.themeColor.set('dark');

    //Update Value of Signal
    this.themeColor.update(currentValue => currentValue === 'light' ? 'dark' : 'light');

    //Fetch value from signal
    document.body.className = this.themeColor();
  }
}
