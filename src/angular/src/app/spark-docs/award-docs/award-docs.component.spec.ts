import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { SparkAwardModule } from '../../spark-extras-angular/components/spark-extras-angular-award/spark-extras-angular-award.module';
import { AwardDocsComponent } from './award-docs.component';

describe('AwardDocsComponent', () => {
  let component: AwardDocsComponent;
  let fixture: ComponentFixture<AwardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule, SparkAwardModule],
      declarations: [AwardDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
