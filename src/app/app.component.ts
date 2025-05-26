import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehicle } from './vehicle';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, VehicleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ng-signals-example';

  /* Input Signal Example */
  allVehicles: Vehicle[] = [
    { id: 1, make: "Toyota", model: "Camry", year: 2020, color: "Silver" },
    { id: 2, make: "Honda", model: "Civic", year: 2019, color: "Blue" },
    { id: 3, make: "Ford", model: "F-150", year: 2021, color: "Black" },
    { id: 4, make: "Tesla", model: "Model 3", year: 2023, color: "White" },
    { id: 9, make: "Kia", model: "Sportage", year: 2023, color: "White" },
  ]

  /* Signal Use Case Example 3 */
  products = signal([
    { id: 1, name: "Sugar", price: 2.00 },
    { id: 1, name: "Milk", price: 3.99 },
    { id: 1, name: "Coffee", price: 2.55 },
  ])

  //User Input filter search
  filterName = signal('');

  //Computed Signal
  filteredProducts = computed(() => {
    return this.products().filter(x => x.name.toLowerCase().includes(this.filterName()))
  })

  changeFiler(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }

  /* Computed Signal Example */
  //Computed Signal
  price = 19;
  quantity = signal(10); //Initial Value of 'quantity' signal. 
  //When 'quantity' signal value changed -> totalPrice is auto-updated.
  totalPrice = computed(() => this.price * this.quantity()); //Read-Only. 

  //Change 'quantity' and value of totalPrice is change in real-time
  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }

  /* Basic Signal Example */
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
