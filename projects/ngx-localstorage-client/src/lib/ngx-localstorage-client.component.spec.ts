import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLocalstorageClientComponent } from './ngx-localstorage-client.component';

describe('NgxLocalstorageClientComponent', () => {
  let component: NgxLocalstorageClientComponent;
  let fixture: ComponentFixture<NgxLocalstorageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLocalstorageClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxLocalstorageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
