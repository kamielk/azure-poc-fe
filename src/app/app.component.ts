import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { ApiModule, AzurePOCService } from './core/openapi';
import { NbLayoutModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { PokemonContainerComponent } from "./pokemon-container/pokemon-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NbLayoutModule, ApiModule, PokemonContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'azure-poc-fe';
}
