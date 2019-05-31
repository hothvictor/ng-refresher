import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/forms/src/facade/async";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  // @Output() personCreate = new EventEmitter<string>();

  enteredPersonName = '';
  constructor(private personsService: PersonsService) {

  }

  onClickCreate() {
    console.log('created a person: ' + this.enteredPersonName)
    // this.personCreate.emit(this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
