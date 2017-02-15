import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-contact',
  template: `
    contact:{{id$|async}}
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  id$;

  constructor(private route: ActivatedRoute) {
    this.id$ = route.params.map((p: any) => p.id);
  }

  ngOnInit() {
  }

}
