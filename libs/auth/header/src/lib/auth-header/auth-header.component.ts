import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rank-active-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {

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
