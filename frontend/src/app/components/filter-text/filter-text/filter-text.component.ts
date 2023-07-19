import { Component, EventEmitter, Input, Output } from '@angular/core';
import Influencer from 'src/interfaces/Influencer';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent {
  @Input() arrayToFilter!: Influencer[];
  @Input() filterType!: string;
  @Output() filterEvent = new EventEmitter<Influencer[]>();
  private filteredArray!: Influencer[];

  constructor() {}

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value === '') this.filterEvent.emit(this.arrayToFilter)
    else {
      this.filteredArray = this.arrayToFilter.filter((arrayElem: any) => {
        return arrayElem[this.filterType].toLowerCase().includes(value.toLowerCase())
      })
      this.filterEvent.emit(this.filteredArray);
    }
  }
}
