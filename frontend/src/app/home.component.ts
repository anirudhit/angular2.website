import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'home',
  template: `
  	<!-- <new-message></new-message> -->
    <messages></messages>
  `
})
export class HomeComponent {}
