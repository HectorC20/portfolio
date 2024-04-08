import { Component } from '@angular/core';
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectComponent} from "./project/project.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ClientComponent} from "./client/client.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactMeComponent,
    SkillsComponent,
    AboutMeComponent,
    ProjectComponent,
    ClientComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
