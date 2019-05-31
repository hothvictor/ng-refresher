import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";


// @Injectable({ providedIn: 'root' })
export class PersonsService {
  perssonsChanged = new Subject<string[]>();
  persons: string[] = [];
  httpClient: any;

  constructor(private http: Http) {
  }

  fetchPersons() {
    this.http.get('https://swapi.co/api/person').subscribe(resData => console.log(resData))
  }

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons)

    this.perssonsChanged.next(this.persons); //call next to pass updated persons
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name; //return false
    });
    console.log(this.persons)
    this.perssonsChanged.next(this.persons);

  }

}
