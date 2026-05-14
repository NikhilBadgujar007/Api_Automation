// import { test, expect, request } from '@playwright/test';

// test('Create Member Without Login', async () => {
//   const random4Digit = Math.floor(1000 + Math.random() * 9000);
//   const email = `nikhil.badgujar+${random4Digit}@tudip.com`;
//   const practice = 15051;
//   // 🔹 Context for member signup
//   const apiContext = await request.newContext({
//     baseURL: 'https://membership.boomclouddev.com',
//     extraHTTPHeaders: { 'Content-Type': 'application/json' }
//   });

//   // 1️⃣ Validate dependent
//   const validatePayload = {
//     dependentList: [
//       { name: "Aryan Rai", age: 25, dob: "2001-02-15T18:30:00.000Z" },
//       { name: "kalpesh", age: 10, dob: "2013-02-15T18:30:00.000Z" }
//     ],
//     planId: 15523,
//     practiceId: 15051
//   };

//   const responseDepen = await apiContext.post(
//     '/member/api/signup/validate-dependent',
//     { data: validatePayload }
//   );

//   expect(responseDepen.status()).toBe(201);
//   const body = await responseDepen.json();

// // 2️⃣ Check if email exists
// const checkEmail = await apiContext.get(
//   `/member/api/signup/check-email`,
//   { params: { email, practice } }
// );

// const checkBody = await checkEmail.json();
// expect(checkEmail.status()).toBe(200);

//   // 2️⃣ Create member
//   const payload = {
//     name: "Nik",
//     email: email,
//     password: "Tudip@123",
//     address: "p. no 21",
//     city: "salt lake city",
//     zip: "84020",
//     phone: "(092) 846-7738",
//     dependents: validatePayload.dependentList,
//     discountId: null,
//     paytype: "CREDIT",
//     cardToken: "tok_visa",
//     totalCharge: body.data.result.totalChargeToday,
//     price: body.data.result.planPrice,
//     nextPayDate: body.data.result.nextPaymentDate.split('T')[0],
//     nextPayAmount: body.data.result.nextPaymentAmount,
//     planId: 15523,
//     practiceId: 15051,
//     signature: "",
//     source: "WEB"
//   };

//   const response = await apiContext.post(
//     '/member/api/signup/create',
//     { data: payload }
//   );

//   expect(response.status()).toBe(201);

//   const Memberbody = await response.json();
//   const memberId = (Memberbody.data.result.id);
//   console.log("Member created:", memberId);

// });



//   //await apiContext.dispose();  // ✅ Now safe to close

//   // 🔹 Context for practice login + delete
//   /*
//   const practiceApi = await request.newContext({
//     baseURL: 'https://membership.boomclouddev.com',
//     extraHTTPHeaders: { 'Content-Type': 'application/json' }
//   });

//   // 3️⃣ Practice login
//   const loginResponse = await practiceApi.post('/practice/api/authenticate', {
//     data: {
//       username: "aryan.rai@tudip.com",
//       password: "Tudip@123",
//       rememberMe: true,
//       captcha: "XXXX.DUMMY.TOKEN.XXXX",
//       deviceId: "test-device-123"
//     }
//   });

//   expect(loginResponse.status()).toBe(201);

//   // 4️⃣ Delete member using practice context

//   const deleteMem = {
//   deletedBy: "Nikhil Badgujar",
//   deleteNote: "Deleting the member through automation"
// };

// const deleteCreatedMember = await practiceApi.put(
//   `/practice/api/members/delete/${memberId}`,
//   { data: deleteMem }
// );

// console.log("Delete Status:", deleteCreatedMember.status());
// console.log("Delete Body:", await deleteCreatedMember.text());

// expect(deleteCreatedMember.status()).toBe(200);
// expect(await deleteCreatedMember.text()).toContain("Successfully deleted member");

// await practiceApi.dispose();
// */