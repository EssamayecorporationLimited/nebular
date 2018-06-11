import { Component } from '@angular/core';

@Component({
  selector: 'nb-calendar-range-test',
  template: `
    Selected date range: {{ (range?.startDate | date) + " - " + (range?.endDate | date) }}
    <br/>
    <br/>
    <nb-calendar-range [value]="range" (change)="onChange($event)"></nb-calendar-range>
  `,
})
export class NbCalendarRangeTestComponent {
  range = null;

  onChange(range) {
    this.range = range;
  }
}
