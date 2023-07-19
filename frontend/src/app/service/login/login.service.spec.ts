import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import Authorization from 'src/interfaces/Authorization';

describe('LoginService', () => {
  let service: LoginService;
  let testingController: HttpTestingController;
  const creds = { username: 'mockuser', password: 'mockpassword' }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should make a post request to the API when submitted and return Access Token', () => {
    service.login(creds).subscribe((response: Error | Authorization) => {
      if (response instanceof Error) expect(response.message)
      else {
        expect(response.accessToken).toBe('mocktoken')
        expect(response.admin).toBeTrue()
      }
    });
    const mockReq = testingController.expectOne(environment.baseApiUrl+'/login');
      mockReq.flush({ accessToken: 'mocktoken', admin: true })
  })
});
