import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkHighlightBoardComponent } from './spark-extras-angular-highlight-board.component';

describe('SparkHighlightBoardComponent', () => {
  let component: SparkHighlightBoardComponent;
  let fixture: ComponentFixture<SparkHighlightBoardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SparkCoreAngularModule],
      declarations: [SparkHighlightBoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkHighlightBoardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if type is not set', () => {
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image'
    );
  });

  it('should add the correct class if type is set as noImage', () => {
    component.type = 'noImage';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-HighlightBoard');
  });

  it('should add the correct class if type is set as stacked', () => {
    component.type = 'stacked';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-c-HighlightBoard--stacked'
    );
  });

  it('should set the data-analytics attribute given a value in the analyticsStringCta Input', () => {
    const str = 'One';
    component.analyticsStringCta = str;
    fixture.detectChanges();
    expect(element.querySelector('a').getAttribute('data-analytics')).toEqual(
      str
    );
  });

  it('should set the data-analytics attribute given a value in the analyticsStringCta2 Input', () => {
    const str = 'One';
    component.ctaText2 = str;
    component.analyticsStringCta2 = str;
    fixture.detectChanges();
    const link2 = element.querySelectorAll('a');
    expect(link2[1].getAttribute('data-analytics')).toEqual(str);
  });

  it('should add the correct classes if type and additionalClasses have values', () => {
    component.type = 'default';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-HighlightBoard sprk-c-HighlightBoard--has-image sprk-u-pam sprk-u-man'
    );
  });
});
