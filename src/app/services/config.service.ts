import { Injectable } from '@angular/core';

export interface AppConfig {
  apiKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: AppConfig;

  setConfig(config: AppConfig) {
    this.config = config;
  }

  get apiKey(): string {
    return this.config.apiKey || '';
  }
}
