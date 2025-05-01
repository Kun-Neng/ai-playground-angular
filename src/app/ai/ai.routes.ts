import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gemini-text',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./ai.component').then(m => m.AiComponent),
    children: [
      {
        path: 'gemini-text',
        loadComponent: () => import('./components/gemini-text/gemini-text.component').then(m => m.GeminiTextComponent)
      },
      {
        path: 'gemini-vision',
        loadComponent: () => import('./components/gemini-vision/gemini-vision.component').then(m => m.GeminiVisionComponent)
      },
      {
        path: 'gemini-chat',
        loadComponent: () => import('./components/gemini-chat/gemini-chat.component').then(m => m.GeminiChatComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'gemini-text'
  }
];
