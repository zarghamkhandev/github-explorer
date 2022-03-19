import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
