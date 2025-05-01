import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-ai',
  imports: [RouterModule, SettingsComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AiComponent { }
