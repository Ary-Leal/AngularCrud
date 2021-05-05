import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaContatoComponent } from './deleta-contato.component';

describe('DeletaContatoComponent', () => {
  let component: DeletaContatoComponent;
  let fixture: ComponentFixture<DeletaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
