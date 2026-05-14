// import { test as base } from '@playwright/test';
// import { MemberService } from '../services/memberService';
// import { loginAndGetStorage } from '../utils/authHelper';

// type ApiFixtures = {
//   memberService: MemberService;
// };

// export const test = base.extend<ApiFixtures>({
  
//   memberService: async ({}, use) => {

//     const practiceId = 'E92E921C-DBB1-4258-8CB4-DA6460CE6456';

//     const storageState = await loginAndGetStorage(practiceId, {
//       username: 'aryan.rai+2@tudip.com',
//       password: 'Tudip@123'
//     });

//     const service = new MemberService();
//     await service.init(storageState);

//     await use(service);

//     await service.dispose();
//   }
// });
