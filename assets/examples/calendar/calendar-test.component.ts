import { Component } from '@angular/core';

@Component({
  selector: 'nb-calendar-test',
  template: `
    Selected date: {{ date | date }}
    <br/>
    <br/>
    <nb-calendar [value]="date" (change)="onChange($event)"></nb-calendar>
  `,
})
export class NbCalendarTestComponent {
  date = null;

  onChange(date) {
    this.date = date;
  }
}
