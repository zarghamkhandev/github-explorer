import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributorDetailsComponent } from './contributor-details.component';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [ContributorDetailsComponent],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiAvatarModule,
    TuiButtonModule,
    TuiSvgModule,
    PipesModule,
  ],
  exports: [ContributorDetailsComponent],
})
export class ContributorDetailsModule {}
