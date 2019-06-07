import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rank-active-auth-shared-header',
  templateUrl: './auth-shared-header.component.html',
  styleUrls: ['./auth-shared-header.component.scss']
})
export class AuthSharedHeaderComponent implements OnInit {

  urlToMain: string;
  wlDomainDescription: string;
  wlDomainLogo: {
    imgUrl:string,
    ingAlt: string
  } = {
    imgUrl:"https://dev.ranksonic.com/assets/images/logo_rankactive.png",
    ingAlt:"RankActive SEO Platform"
  };

  wlDataUpdated: Subscription;

  wlId: number;

  constructor() {
    this.wlDomainDescription = 'RankActive SEO Platform';
  }

  ngOnInit() {
  }

}
