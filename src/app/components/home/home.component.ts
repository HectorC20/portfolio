import { Component } from '@angular/core';
import {ContactMeComponent} from "./contact-me/contact-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {ProjectComponent} from "./project/project.component";
import {AboutMeComponent} from "./about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactMeComponent,
    SkillsComponent,
    AboutMeComponent,
    ProjectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
