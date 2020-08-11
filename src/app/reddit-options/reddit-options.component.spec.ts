import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditOptionsComponent } from './reddit-options.component';

describe('RedditOptionsComponent', () => {
  let component: RedditOptionsComponent;
  let fixture: ComponentFixture<RedditOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
