import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
