import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiVisionComponent } from './gemini-vision.component';

describe('GeminiVisionComponent', () => {
  let component: GeminiVisionComponent;
  let fixture: ComponentFixture<GeminiVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeminiVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeminiVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
