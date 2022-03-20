import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'repos',
    loadChildren: () =>
      import('./pages/repos/repos.module').then((m) => m.ReposModule),
  },
  {
    path: 'contributors/:repoId',
    loadChildren: () =>
      import('./pages/contributors/contributors.module').then(
        (m) => m.ContributorsModule
      ),
  },
  { path: '**', redirectTo: 'repos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
