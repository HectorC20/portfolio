import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  langEl: Element | null = document.querySelector('.langWrap');
  link: NodeListOf<Element> = document.querySelectorAll('a');
  titleEl: Element | null = document.querySelector('.title');
  descrEl: Element | null = document.querySelector('.description');
  data: { [key: string]: LanguageData } = {};

  constructor() {
    this.loadLanguageData();
    this.link.forEach((el: Element) => {
      el.addEventListener('click', () => {
        if (this.langEl && this.titleEl && this.descrEl) {
          this.langEl.querySelector('.active')?.classList.remove('active');
          el.classList.add('active');

          const attr = el.getAttribute('language');
          if (attr && this.data[attr]) {
            this.titleEl.textContent = this.data[attr].title;
            this.descrEl.textContent = this.data[attr].description;
          }
        }
      });
    });
  }

  private async loadLanguageData() {
    try {
      const response = await fetch('path_to_your_data.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading language data:', error);
    }
  }
}

interface LanguageData {
  title: string;
  description: string;
}

