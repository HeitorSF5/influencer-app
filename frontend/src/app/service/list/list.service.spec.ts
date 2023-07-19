import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListService } from './list.service';
import Influencer from 'src/interfaces/Influencer';
import { INFLUENCERS } from 'src/mock-data/influencers';
import { environment } from 'src/environments/environment';

describe('ListService', () => {
  let service: ListService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should return an array of Influencers from the API', () => {
    service.getAll().subscribe((influencers: Influencer[]) => {
      expect(influencers).toBeTruthy();
      expect(influencers.length).toBe(4);
      expect(influencers[2].name).toBe("Kamille")
    });
    const mockReq = testingController.expectOne(environment.baseApiUrl+'/influencers');
    mockReq.flush(Object.values(INFLUENCERS))
  });

  it('should successfully delete an entry in the Influencers array', () => {
    const idToDelete = 2
    service.delete(idToDelete).subscribe(() => {
      // no idea...
    })
    const mockReq = testingController.expectOne(environment.baseApiUrl+'/influencers/'+idToDelete)
    mockReq.flush(Object.values(INFLUENCERS))

  })
});
