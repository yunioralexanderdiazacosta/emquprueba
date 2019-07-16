import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHubsComponent } from './lista-hubs.component';

describe('ListaHubsComponent', () => {
  let component: ListaHubsComponent;
  let fixture: ComponentFixture<ListaHubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
