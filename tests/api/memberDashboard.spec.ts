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
<<<<<<< HEAD
    expect(body.data.result.isAvailable).toBe(false);
  });


  test('Verify the dashboard functionality', async ({ services, member }) => {
=======
  });

  test.only('Verify the dashboard functionality', async ({ services, member }) => {
>>>>>>> 30e3574d7f10c790cfc66f12f5b5d7bb930cf4c5
    const memberId = member.memberId;
    console.log("Testing dashboard with member ID:", memberId, typeof memberId);
    const response = await services.memberService.getDashboardDetails(memberId);
    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(body.message);
    expect(body.message).toBe('Successfully found the records to show on the Member dashboard.');
<<<<<<< HEAD

    expect(body.data.result.id).toBe(memberId);
    expect(body.data.result.price).toBe(member.payload.price);
    expect(body.data.result.nPayAmnt).toBe(member.payload.nextPayAmount);
    expect(body.data.result.nextPayDate).toBe(member.payload.nextPayDate);
    expect(body.data.result.lPayAmnt).toBe(member.payload.price);
    expect(body.data.result.planName).toBe(member.planName);

    const payment = body.data.result.paymentDTO[0];

    expect(payment).toHaveProperty("status", "Successful");
    expect(payment).toHaveProperty("paymentStatus", "succeeded");
    expect(payment).toHaveProperty("amnt", 80);
    
=======
>>>>>>> 30e3574d7f10c790cfc66f12f5b5d7bb930cf4c5
  });
});