import { TestBed } from '@angular/core/testing';
import { InfoService } from './info.service';
describe('InfoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(InfoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=info.service.spec.js.map