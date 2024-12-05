import { Component } from '@angular/core';
import { AzurePOCService } from '../core/openapi';
import { PokemonDisplayComponent } from "../pokemon-display/pokemon-display.component";
import { NbLayoutModule } from '@nebular/theme';

interface PokemonRepresentation {
  name: string;
  imageBlob: Blob;
  types: string[];
}

@Component({
  selector: 'app-pokemon-container',
  standalone: true,
  imports: [NbLayoutModule, PokemonDisplayComponent],
  templateUrl: './pokemon-container.component.html',
  styleUrl: './pokemon-container.component.scss',
})
export class PokemonContainerComponent {
  pokemonList: PokemonRepresentation[] = [];
  constructor(private api: AzurePOCService) {}

  ngOnInit() {
    this.loadPokemonData();
  }

  private loadPokemonData() {
    this.api.getPokemon().subscribe((data) => {
      for (let pokemon of data) {
        console.log(`getting image for ${pokemon.name}`);
        this.api
          .getPokemonImage(`pokemon/${pokemon.name}.png`)
          .subscribe((blob) => {
            this.pokemonList.push({
              name: pokemon.name ?? '',
              imageBlob: blob,
              types: pokemon.types ?? [],
            });
          });
      }
    });
  }
}
