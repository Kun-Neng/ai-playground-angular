import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, filter, map, takeUntil, tap } from 'rxjs';
import { GenerativeAiService, settingConfigs } from '../../../services/generative-ai.service';
import { SettingComponent } from './components/setting/setting.component';
import { numberInputValidator } from './number-input-validator';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe, ReactiveFormsModule, SettingComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.formBuilder.group({
    temperature: this.formBuilder.control(0, numberInputValidator(true, 0, 2, true)),
    top_p: this.formBuilder.control(0, numberInputValidator(true, 0, 1, true)),
    maxOutputTokens: this.formBuilder.control(0)
  });

  tooltips = {
    temperature: "Lower temperatures are good for prompts that require a more deterministic and less open-ended or creative response, while higher temperatures can lead to more diverse or creative results.",
    top_p: "Tokens are selected from the most (see top-K) to least probable until the sum of their probabilities equals the top-P value. Specify a lower value for less random responses and a higher value for more random responses."
  };

  showMore = true;

  genConfig$ = this.generativeAiService.genConfig$.pipe(
    tap(configs => {
      // console.table(configs);
      this.form.patchValue({
        temperature: configs.temperature,
        top_p: configs.top_p,
        maxOutputTokens: configs.maxOutputTokens
      }, { emitEvent: false });
    })
  );

  private _destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private generativeAiService: GenerativeAiService) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this._destroy$),
      filter(() => this.form.valid),
      map(configs => ({
        temperature: Number(configs.temperature),
        top_p: Number(configs.top_p),
        maxOutputTokens: configs.maxOutputTokens
      } as settingConfigs))
    ).subscribe(configs => {
      this.generativeAiService.setConfig(configs);
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  changeShow() {
    this.showMore = !this.showMore;
  }
}
