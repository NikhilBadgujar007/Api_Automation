import { test } from '../../api/fixtures/custom-fixure';   
import { expect } from '@playwright/test';

test.describe('Member Dashboard Functionality', () => {


  test('Fetch member agreement successfully', async ({ services, member }) => {
    const memberId = member.memberId;
    console.log("Testing agreement with member ID:", memberId, typeof memberId);
    const response = await services.memberService.getAgreement();

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.message);
    expect(body.message).toBe('Successfully fetched the agreement URL.');
  });

  test.only('Verify the dashboard functionality', async ({ services, member }) => {
    const memberId = member.memberId;
    console.log("Testing dashboard with member ID:", memberId, typeof memberId);
    const response = await services.memberService.getDashboardDetails(memberId);
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.message);
    expect(body.message).toBe('Successfully found the records to show on the Member dashboard.');
  });
});