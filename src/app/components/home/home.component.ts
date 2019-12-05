import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFacebook, faTelegram, faSkype } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private gihubIcon = faGithub;
  private linkedinIcon = faLinkedin;
  private facebookIcon = faFacebook;
  private telegrammIcon = faTelegram;
  private skypeIcon = faSkype;

  constructor() { }

  ngOnInit() {
  }

}
