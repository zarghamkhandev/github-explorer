import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Language, LicenseInfo, Repo } from '@types';

@Component({
  selector: 'ngx-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stargazerCount: number | null = null;
  @Input() language: Language | null = null;
  @Input() licenseInfo: LicenseInfo | null = null;
  constructor() {}

  ngOnInit(): void {}
}
