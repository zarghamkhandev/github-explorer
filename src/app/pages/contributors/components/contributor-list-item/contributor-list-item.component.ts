import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-contributor-list-item',
  templateUrl: './contributor-list-item.component.html',
  styleUrls: ['./contributor-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContributorListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
