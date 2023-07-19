import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EditService } from './edit.service';
import { INFLUENCERS } from 'src/mock-data/influencers';
import Influencer from 'src/interfaces/Influencer';

describe('EditService', () => {
  let service: EditService;
  let testingController: HttpTestingController;
  const influencer: Influencer = INFLUENCERS[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EditService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
