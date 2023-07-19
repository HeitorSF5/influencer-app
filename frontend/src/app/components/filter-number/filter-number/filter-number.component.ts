import { Component, EventEmitter, Input, Output } from '@angular/core';
import Influencer from 'src/interfaces/Influencer';

@Component({
  selector: 'app-filter-number',
  templateUrl: './filter-number.component.html',
  styleUrls: ['./filter-number.component.css']
})
export class FilterNumberComponent {
  @Input() arrayToFilter!: Influencer[];
  @Input() filterType!: string;
  @Output() filterEvent = new EventEmitter<Influencer[]>();
  private filteredArray!: Influencer[];

  constructor() {}

  // to do: implement to Switch between 'More than' and 'Less than'

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = +target.value;
    if (value === 0) this.filterEvent.emit(this.arrayToFilter)
    else {
      this.filteredArray = this.arrayToFilter.filter((arrayElem: any) => {
        return +arrayElem[this.filterType] >= value;
      })
      this.filterEvent.emit(this.filteredArray);
    }
  }
}
