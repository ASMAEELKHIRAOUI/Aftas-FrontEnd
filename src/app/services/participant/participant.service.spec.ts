import { TestBed } from '@angular/core/testing';

import { ParticipantComponent } from '../../components/participant/participant.component';

describe('InsertResultsService', () => {
  let service: ParticipantComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
