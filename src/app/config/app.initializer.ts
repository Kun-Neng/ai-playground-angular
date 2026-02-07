import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ConfigService, AppConfig } from '../services/config.service';

export function initializeApp() {
  const http = inject(HttpClient);
  const configService = inject(ConfigService);

  return firstValueFrom(
    http.get<AppConfig>('/assets/config.dev.json')
  ).then(config => {
    configService.setConfig(config);
  });
}
