import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscribable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {

  // @Input() personList: string[];
  personList: string[];
  // private personService: PersonsService;
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  //lifecycle hooks
  ngOnInit(): void {
    this.prsService.fetchPersons();
    // this.personList = this.prsService.persons;
    this.personListSubs = this.prsService.perssonsChanged.subscribe(persons => {
      this.personList = persons;
    }); //subscribe to listen to the new value
  }

  onClickRemove(name: string) {
    this.prsService.removePerson(name);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe(); //prevent data leaks
  }

}
