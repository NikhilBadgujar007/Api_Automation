/*corect code
import { test } from '../../api/fixtures/apiFixture';
import { expect } from '@playwright/test';
// import { test } from '../../api/fixtures/apiFixture';
// import { expect } from '@playwright/test';
//import { test } from '../../api/fixtures/apiFixture';



test.describe('Member Creation and Agreement Flow', () => {

  // test('Member created successfully.....', async ({ memberService }) => {

  //   const response = await memberService.createMember();

  //   expect(response.status()).toBe(201);
  //   const Memberbody = await response.json();
  //   const memberId = (Memberbody.data.result.id);
  //   console.log(Memberbody.message);
  //   console.log("Member created:", memberId);
  //   //expect(body.message).toBe('Successfully fetched the agreement URL.');
  // });

  test('Login and fetch member agreement successfully', async ({ memberService, memberId }) => {

    const response = await memberService.getAgreement();

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.message);
    expect(body.message).toBe('Successfully fetched the agreement URL.');
  });

  test('Verify the dashboard functionality', async ({ memberService, memberId }) => {
    console.log("Testing dashboard with member ID:", memberId, typeof memberId);
    const response = await memberService.getDashboardDetails(memberId);
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.message);
    expect(body.message).toBe('Successfully found the records to show on the Member dashboard.');
  });
});

*/