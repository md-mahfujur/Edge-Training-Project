import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Edge-Training-Project';

  constructor() {
    console.log('AppComponent initialized');
  }
  ngOnInit() {}
}
