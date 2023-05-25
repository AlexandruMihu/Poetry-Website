import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectieComponentComponent } from './colectie-component.component';

describe('ColectieComponentComponent', () => {
  let component: ColectieComponentComponent;
  let fixture: ComponentFixture<ColectieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColectieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
