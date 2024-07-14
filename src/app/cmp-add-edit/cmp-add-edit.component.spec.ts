import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpAddEditComponent } from './cmp-add-edit.component';

describe('CmpAddEditComponent', () => {
  let component: CmpAddEditComponent;
  let fixture: ComponentFixture<CmpAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmpAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
