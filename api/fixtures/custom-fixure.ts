import { test as base } from "@playwright/test";
import { MemberService } from "../services/memberService";
import { DependentService } from "../services/dependentService";
// import { AgreementService } from "../services/agreementService";
import { AuthService } from "../core/authService";

type Member = {
    // memberId: string;
    // email: string;
    // password: string;
    memberId: string;
    email: string;
    password: string;
    //memberData: any;
    dependents: any[];
    payload: any;
    planName: string;
};
type WorkerFixtures = {
    member: Member;
};
type TestFixtures = {
    services: {
        memberService: MemberService;
        dependentService: DependentService;
    };
};

export const test = base.extend<TestFixtures, WorkerFixtures>({

    // ⭐ MEMBER FIXTURE (create member once)
    member: [async ({ }, use: (member: Member) => Promise<void>) => {

        const memberService = new MemberService();
        await memberService.init();

        const response = await memberService.createMember();
        // const body = await response.json();
        const body = await response;
        console.log("created member response body:", body);
        // const member: Member = {
        //     memberId: body.data.result.id,
        //     email: body.data.result.memberEmail,
        //     password: "Tudip@123"
        // };
       // now below part commented
        //  const member: Member = {
        //     memberId: body.memberId,
        //     email: body.email,
        //     password: "Tudip@123"
        // };
         const member: Member = {
            memberId: body.memberId,
            email: body.email,
            password: "Tudip@123",
            //memberData: body.member,
            dependents: body.dependents,
            payload: body.payload,
            planName: body.planName
};
       // console.log("Member created with ID:", body.memberId, "and email:", body.email);
        // const member: Member = {
        //     memberId: body.memberId,
        //     email: body.email ?? "",
        //     password: "Tudip@123"
        // };

        await memberService.dispose();

        await use(member);

        // ⭐ CLEANUP (delete member after test)
        /*
        const practiceAuth = new AuthService();
        await practiceAuth.init();
        await practiceAuth.practiceLogin();

        const deleteResponse = await practiceAuth.deleteMember(member.memberId);

        const deleteBody = await deleteResponse.json();
        console.log("Delete response:", deleteBody);

        if (deleteResponse.status() !== 200) {
            throw new Error("Delete member failed");
        }

        await practiceAuth.dispose();
        */
    }, { scope: "worker" }],


    // ⭐ SERVICES FIXTURE (reuse created member login)
    services: async ({ member }, use) => {

        const practiceId = "670D98A0-0EAC-43E0-928A-73E6FE61DA9F";

        const auth = new AuthService();
        await auth.init();

        await auth.login(practiceId, {
            username: member.email,
            password: member.password
        });

        const storageState = await auth.getStorageState();
        await auth.dispose();

        // create services with authenticated session
        const memberSvc = new MemberService();
        await memberSvc.init(storageState);

        const dependentSvc = new DependentService();
        await dependentSvc.init(storageState);

        // const paymentSvc = new PaymentService();
        // await paymentSvc.init(storageState);

        // const agreementSvc = new AgreementService();
        // await agreementSvc.init(storageState);

        await use({
            memberService: memberSvc,
            dependentService: dependentSvc,
            // agreementService: agreementSvc
        });

    }

});
