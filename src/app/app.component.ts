import { Component, Inject } from '@angular/core';
import { TuiSvgService } from '@taiga-ui/core';
import { CIRCLE_FILL_ICON } from './tokens/circle-icon.token';
import { TWITTER_ICON } from './tokens/twitter-icon.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'github-explorer';
  constructor(
    @Inject(TuiSvgService) tuiSvgService: TuiSvgService,
    @Inject(CIRCLE_FILL_ICON) circleFillIcon: string,
    @Inject(TWITTER_ICON) twitterIcon: string
  ) {
    tuiSvgService.define({ circleFill: circleFillIcon, twitter: twitterIcon });
  }
}
