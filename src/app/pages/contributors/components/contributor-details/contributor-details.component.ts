import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Contributor } from '@types';

@Component({
  selector: 'ngx-contributor-details',
  templateUrl: './contributor-details.component.html',
  styleUrls: ['./contributor-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributorDetailsComponent implements OnInit {
  @Input() contributor: Contributor | null = null;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.contributor);
  }
}
