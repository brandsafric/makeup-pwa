import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create the introduction component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the page elements', () => {
    expect(nativeElement.querySelector('.introduction-image')).toBeTruthy();
    expect(nativeElement.querySelector('.dark-overlay')).toBeTruthy();
    expect(nativeElement.querySelector('.introduction-text')).toBeTruthy();
    expect(nativeElement.querySelector('.get-in-touch')).toBeTruthy();
  });
});
