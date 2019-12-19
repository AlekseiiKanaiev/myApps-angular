import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faFacebook, faTelegram, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gihubIcon = faGithub;
  linkedinIcon = faLinkedin;
  facebookIcon = faFacebook;
  telegrammIcon = faTelegram;
  skypeIcon = faSkype;
  isCollapsed = true;
  humIcon = faBars;

  constructor() { }

  ngOnInit() {
  }

}
