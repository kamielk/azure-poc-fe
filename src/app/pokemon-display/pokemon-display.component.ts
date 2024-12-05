import { Component, Input } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

@Component({
  selector: 'app-pokemon-display',
  standalone: true,
  imports: [NbCardModule],
  templateUrl: './pokemon-display.component.html',
  styleUrl: './pokemon-display.component.scss',
})
export class PokemonDisplayComponent {
  @Input() name!: string;
  @Input() types!: string[];
  public imageUrl: string | ArrayBuffer | null = null;

  @Input({required: true}) 
  public set blob(blob: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      this.imageUrl = reader.result;
    };
  }
}
