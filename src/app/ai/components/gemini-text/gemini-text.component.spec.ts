import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeminiTextComponent } from './gemini-text.component';

describe('GeminiTextComponent', () => {
  let component: GeminiTextComponent;
  let fixture: ComponentFixture<GeminiTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeminiTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeminiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
