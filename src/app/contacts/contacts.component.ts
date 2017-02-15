import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts$;

  constructor(private http: Http) {
    this.contacts$ = http.get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
      // this.contacts$ = http.get('http://localhost:3000/people')
      .map(res => res.json());
  }

  ngOnInit() {
  }

}
