import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-got-house-sub-component',
  templateUrl: './got-house-sub-component.component.html',
  styleUrls: ['./got-house-sub-component.component.css'],
})
export class GotHouseSubComponentComponent {
  @Input() handleHideSubHouse!: () => void;
  @Input() subHouse: any;
}
