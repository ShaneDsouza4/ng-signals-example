import { CommonModule, } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {

  //Need info of Vehicles Component -> Component
  vehicles = input.required<Vehicle[]>();

  //Computed Signal
  filteredVehicles = computed(() => {
    return this.vehicles().filter(x => x.make.includes("Honda"))
  })

}
