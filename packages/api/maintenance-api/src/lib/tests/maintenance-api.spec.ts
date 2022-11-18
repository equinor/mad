import * as mApi from '../maintenance-api';

describe('apiMaintenanceApi', () => {
  it('should work', () => {
    expect(mApi.apiMaintenanceApi()).toEqual('api-maintenance-api');
  });
});


describe("Plants", () => {
  it("should have Tag and Equipment endpoints", () => {
    expect(mApi.Plants.TagAndEquipment).toBeTruthy();
  })
})

