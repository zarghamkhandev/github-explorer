import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-heading-section',
  templateUrl: './heading-section.component.html',
  styleUrls: ['./heading-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingSectionComponent implements OnInit {
  @Input() heading: string = '';
  @Input() separatorText: string = '';
  constructor() {}

  ngOnInit(): void {}
}
