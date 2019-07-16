import { TestBed } from '@angular/core/testing';
import { HubsService } from './hubs.service';
describe('HubsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HubsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=hubs.service.spec.js.map