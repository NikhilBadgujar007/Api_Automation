import { test } from '../../api/fixtures/custom-fixure';
import { expect } from '@playwright/test';

test.describe('Member Dependents Functionality', () => {

  test.only('Verify the member dependents functionality', async ({ services, member }) => {

    const memberId = member.memberId;

    console.log("Testing dependents with member ID:", memberId);

    const response = await services.memberService.getDependentDetails(memberId);

    expect(response.status()).toBe(200);

    const Dependentbody = await response.json();

    console.log("dependents api data", Dependentbody.data.result);

    expect(Dependentbody.message)
      .toBe('Successfully found the records of Dependent member`s data.');

    const dependents_data = member.dependents;

    console.log("dependents data from member payload", dependents_data);

    const apiDependents = Dependentbody.data.result;

    // Verify count
    expect(apiDependents.length).toBe(dependents_data.length);

    // Verify each dependent
//     dependents_data.forEach((expectedDependent: any, index: number) => {

//       const actualDependent = apiDependents[index];

//       // Name validation
//       expect(actualDependent.name).toBe(expectedDependent.name);

//       // Age validation
//       expect(actualDependent.age).toBe(expectedDependent.age);

//        // DOB (compare only date)
//   const actualDob = new Date(actualDependent.dob)
//     .toISOString()
//     .split('T')[0];

//   const expectedDob = new Date(expectedDependent.dob)
//     .toISOString()
//     .split('T')[0];

//   expect(actualDob).toBe(expectedDob);

//     });

for (let i = 0; i < apiDependents.length; i++) {

  // Name validation
  expect(apiDependents[i].name)
    .toBe(member.dependents[i].name);

  // Age validation
  expect(apiDependents[i].age)
    .toBe(member.dependents[i].age);

  // DOB validation
  const actualDob = new Date(apiDependents[i].dob)
    .toISOString()
    .split('T')[0];

  const expectedDob = new Date(member.dependents[i].dob)
    .toISOString()
    .split('T')[0];

  expect(actualDob).toBe(expectedDob);

}

  });

});
