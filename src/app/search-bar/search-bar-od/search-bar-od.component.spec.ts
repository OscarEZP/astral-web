import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarOdComponent } from './search-bar-od.component';

describe('SearchBarOdComponent', () => {
  let component: SearchBarOdComponent;
  let fixture: ComponentFixture<SearchBarOdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarOdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarOdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
