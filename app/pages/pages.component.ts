import { Component } from '@angular/core';

@Component({
  selector: 'pages',
  template: `<GridLayout>
                <page-router-outlet></page-router-outlet>
            </GridLayout>`,
})
export class PagesComponent {

}