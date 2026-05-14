/* correct code with memberId as number and proper fixture structure 
import { test as base } from '@playwright/test';
import { MemberService } from '../services/memberService';
import { AuthService } from '../core/authService';

type ApiFixtures = {
  memberService: MemberService;
  memberId: number;
  memberEmail: string;
  memberPassword: string;
};

export const test = base.extend<ApiFixtures>({
  
  memberService: async ({}, use) => {

    const practiceId = 'E92E921C-DBB1-4258-8CB4-DA6460CE6456';

    // Create Member
    const memberService = new MemberService();
    await memberService.init();

    const createMemberResponse = await memberService.createMember();
    const createMemberBody = await createMemberResponse.json();

    const memberId = createMemberBody.data.result.id;
    const email = createMemberBody.data.result.memberEmail;
    const password = "Tudip@123";

    console.log("Created member email:", email);
    console.log("Created member ID:", memberId);

    await memberService.dispose();

    // Login Member
    const auth = new AuthService();
    await auth.init();

    const loginResponse = await auth.login(practiceId, {
      username: email,
      password: password
    });

    if (loginResponse.status() !== 201) {
      throw new Error("Login failed");
    }

    const storageState = await auth.getStorageState();
    await auth.dispose();

    // Logged in member service
    const loggedInService = new MemberService();
    await loggedInService.init(storageState);

    loggedInService.memberId = memberId;  
    // expose fixture
    await use(loggedInService);

    await loggedInService.dispose();

    // Cleanup → delete member
    const practiceAuth = new AuthService();
    await practiceAuth.init();

    await practiceAuth.practiceLogin();

    const deleteResponse = await practiceAuth.deleteMember(memberId);
    const deleteBody = await deleteResponse.json();
   console.log("Delete response body:", deleteBody);
    console.log("Delete response status:", deleteResponse.status());
    if (deleteResponse.status() !== 200) {
      throw new Error("Delete failed");
    }

    await practiceAuth.dispose();
  },

  memberId: async ({ memberService }, use) => {
    await use(memberService.memberId);
  },

});
*/


/*import { test as base } from '@playwright/test';
import { MemberService } from '../services/memberService';
import { AuthService } from '../core/authService';

type ApiFixtures = {
  memberService: MemberService;
  memberId: number;
};

export const test = base.extend<ApiFixtures>({

  memberService: async ({ }, use, testInfo) => {

    const practiceId = 'E92E921C-DBB1-4258-8CB4-DA6460CE6456';
    const memberService = new MemberService();
    await memberService.init();

    const createMemberResponse = await memberService.createMember();
    const createMemberBody = await createMemberResponse.json();
    const memberId = createMemberBody.data.result.id;   // ✅ extract ID
    const email = createMemberBody.data.result.memberEmail;
    console.log("Created member email:", email);
   // console.log("Member body", createMemberBody);
    console.log("Create Member Response:", createMemberBody);
    console.log("Created member ID:", createMemberBody.data.result.id);
    const password = "Tudip@123";

    const creds = {
      username: email,
      password: password
    }

    await memberService.dispose();

    // 2️⃣ Login With Same Member
    const auth = new AuthService();
    await auth.init();

    const loginResponse = await auth.login(practiceId, creds);

    if (loginResponse.status() !== 201) {
      throw new Error('Login failed');
    }

    const storageState = await auth.getStorageState();
    await auth.dispose();

    // 3️⃣ Inject storage into MemberService
    const loggedInService = new MemberService();
    await loggedInService.init(storageState);
   // loggedInService.memberId = memberId;
       // store memberId for next fixture
    testInfo.annotations.push({
      type: 'memberId',
      description: memberId.toString()
    });
   await use(loggedInService);
     // 👇 expose both values
    // await use({
    //   memberService: loggedInService,
    //   memberId: memberId
    // });
        // attach memberId to testInfo so another fixture can use it
   //new one testInfo.attach('memberId', { body: memberId });
    await loggedInService.dispose();

    // 2️⃣ Practice Login for delete the created member

    const practiceAuth = new AuthService();
    await practiceAuth.init();

    const practiceLoginResponse = await practiceAuth.practiceLogin();

    if (practiceLoginResponse.status() !== 201) {
      throw new Error('Practice login failed');
    }

    const deleteResponse = await practiceAuth.deleteMember(createMemberBody.data.result.id);

    if (deleteResponse.status() !== 200) {
      throw new Error('Delete failed');
    }

    await practiceAuth.dispose();
  },
  //   memberId: async ({ memberService }, use) => {
  //   await use(memberService.memberId);
  // }

}
);
*
/

/*
import { test as base } from '@playwright/test';
import { MemberService } from '../services/memberService';
import { AuthService } from '../core/authService';

type ApiFixtures = {
  memberService: MemberService;
  memberId: string;
};

export const test = base.extend<ApiFixtures>({

  memberService: async ({}, use, testInfo) => {

    const practiceId = 'E92E921C-DBB1-4258-8CB4-DA6460CE6456';

    const memberService = new MemberService();
    await memberService.init();

    const createMemberResponse = await memberService.createMember();
    const createMemberBody = await createMemberResponse.json();

    const memberId = createMemberBody.data.result.id;
    const email = createMemberBody.data.result.memberEmail;

    console.log("Created member email:", email);
    console.log("Created member ID:", memberId);

    const password = "Tudip@123";

    await memberService.dispose();

    // Login
    const auth = new AuthService();
    await auth.init();

    const loginResponse = await auth.login(practiceId, {
      username: email,
      password: password
    });

    if (loginResponse.status() !== 201) {
      throw new Error('Login failed');
    }

    const storageState = await auth.getStorageState();
    await auth.dispose();

    const loggedInService = new MemberService();
    await loggedInService.init(storageState);

    // store memberId for next fixture
    testInfo.annotations.push({
      type: 'memberId',
      description: memberId.toString()
    });

    await use(loggedInService);

    await loggedInService.dispose();

    // Delete Member
    const practiceAuth = new AuthService();
    await practiceAuth.init();

    const practiceLoginResponse = await practiceAuth.practiceLogin();

    if (practiceLoginResponse.status() !== 201) {
      throw new Error('Practice login failed');
    }

    const deleteResponse = await practiceAuth.deleteMember(memberId);

    if (deleteResponse.status() !== 200) {
      throw new Error('Delete failed');
    }

    await practiceAuth.dispose();
  },

  memberId: async ({ memberService }, use) => {
    // await use(memberService.memberId);
    await use((memberService as any).memberId);
  }

});
*/