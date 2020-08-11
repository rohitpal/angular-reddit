import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCardListComponent } from './reddit-card-list.component';

describe('RedditCardListComponent', () => {
  let component: RedditCardListComponent;
  let fixture: ComponentFixture<RedditCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
