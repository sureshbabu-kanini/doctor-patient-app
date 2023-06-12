import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Component, RendererFactory2 } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html' ,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private renderer: Renderer2;
    isDarkMode: boolean = false;
  
    constructor(private rendererFactory: RendererFactory2, private router: Router) {
      this.renderer = rendererFactory.createRenderer(null, null);
    }
  
    toggleDarkMode(): void {
      this.isDarkMode = !this.isDarkMode;
  
      if (this.isDarkMode) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode');
      }
    }

    isUserSideRoute(): boolean {
      return this.router.url.includes('/login');
    }
  }
  
  
  
  
  
  
  
