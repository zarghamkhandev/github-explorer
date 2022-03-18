import { Component, OnInit } from '@angular/core';
import { reposGQL } from '../../graphql/reposGQL.service';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private reposGQL: reposGQL) {}

  ngOnInit(): void {
    this.reposGQL.fetch().subscribe((res) => {
      console.log(res);
    });
  }
}
