import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConciseComponent } from './post-concise.component';

describe('PostConciseComponent', () => {
  let component: PostConciseComponent;
  let fixture: ComponentFixture<PostConciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
