// import { test } from '../../api/fixtures/custom-fixure';
// import { expect } from '@playwright/test';

// test.describe('Member Dependents Functionality', () => {

//   test.skip('Verify the member dependents functionality', async ({ services, member }) => {
//     const memberId = member.memberId;
//     console.log("Testing dependents with member ID:", memberId, typeof memberId);
//     const response = await services.memberService.getDependentDetails(memberId);
//     expect(response.status()).toBe(200);
//     const Dependentbody = await response.json();
//     console.log("depemdets api data", await Dependentbody.data.result);
//     expect(response.status()).toBe(200);
//     expect(Dependentbody.message).toBe('Successfully found the records of Dependent member`s data.');
//     const apiDependents = Dependentbody.data.result;
//     // expect(apiDependents.length).toEqual(2);
//     // expect(Dependentbody.data.result).toBeDefined();
//     const apiDependents = Dependentbody.data.result;

//     expect(apiDependents.length).toBe(member.dependents.length);

//     for (let i = 0; i < apiDependents.length; i++) {

//       expect(apiDependents[i].name).toBe(member.dependents[i].name);

//       expect(apiDependents[i].age).toBe(member.dependents[i].age);

//     }


//   });
// });