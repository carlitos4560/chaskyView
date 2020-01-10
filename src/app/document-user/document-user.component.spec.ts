import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUserComponent } from './document-user.component';

describe('DocumentUserComponent', () => {
  let component: DocumentUserComponent;
  let fixture: ComponentFixture<DocumentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
