import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneListaComponent } from './creazione-lista.component';

describe('CreazioneListaComponent', () => {
  let component: CreazioneListaComponent;
  let fixture: ComponentFixture<CreazioneListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreazioneListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazioneListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
