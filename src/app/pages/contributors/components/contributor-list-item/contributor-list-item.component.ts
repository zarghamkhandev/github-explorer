import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-contributor-list-item',
  templateUrl: './contributor-list-item.component.html',
  styleUrls: ['./contributor-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributorListItemComponent implements OnInit {
  @Input() avatarUrl: string = '';
  @Input() index: number = 0;
  @Input() name: string = '';
  @Input() company: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
