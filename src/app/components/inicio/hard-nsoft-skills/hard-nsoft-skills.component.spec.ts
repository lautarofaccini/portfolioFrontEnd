import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardNsoftSkillsComponent } from './hard-nsoft-skills.component';

describe('HardNsoftSkillsComponent', () => {
  let component: HardNsoftSkillsComponent;
  let fixture: ComponentFixture<HardNsoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardNsoftSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardNsoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
