import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
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
  @Input() isSelected: boolean = false;

  @HostBinding('class.selected')
  get selected() {
    return this.isSelected;
  }
  constructor() {}

  ngOnInit(): void {}
}
