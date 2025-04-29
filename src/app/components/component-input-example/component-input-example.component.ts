import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [ PersonTableComponent ],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
      givenName: "Neil",
      surName: "J.",
      age: 19,
      email: "nJ@aueb.gr",
      address: "Athens, Greece"
    }

    person1: Person = {
      givenName: "Andrew",
      surName: "M.",
      age: 20,
      email: "aM@aueb.gr",
      address: "Athens, Greece"
    }
}
