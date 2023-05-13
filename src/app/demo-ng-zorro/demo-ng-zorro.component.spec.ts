import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgZorroComponent } from './demo-ng-zorro.component';

describe('DemoNgZorroComponent', () => {
  let component: DemoNgZorroComponent;
  let fixture: ComponentFixture<DemoNgZorroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemoNgZorroComponent]
    });
    fixture = TestBed.createComponent(DemoNgZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
