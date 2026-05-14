import { ApiClient } from '../core/apiClient';
import { TestDataGenerator } from '../utils/testDataGenerator';

export class MemberService extends ApiClient {
  //memberId!: number;
  async validateDependent(validatePayload: any) {
    return await this.requestContext.post(
      '/member/api/signup/validate-dependent',
      { data: validatePayload }
    );
  }

  async checkEmail(email: string, practice: number) {
    return await this.requestContext.get(
      `/member/api/signup/check-email`,
      { params: { email, practice } }
    );
  }
  async createMember() {
    const name = TestDataGenerator.getRandomName();
    const cityData = TestDataGenerator.getRandomCity();
    const phone = TestDataGenerator.generatePhone();

    const dep1 = TestDataGenerator.generateDOB(18, 40);
    const dep2 = TestDataGenerator.generateDOB(5, 15);
    //const random4Digit = Math.floor(1000 + Math.random() * 9000);
    //const email = `nikhil.badgujar+${random4Digit}@tudip.com`;
    const email = TestDataGenerator.generateEmail();
    const practice = 15050;
    const dependents = [
      { name: TestDataGenerator.getRandomName(), age: dep1.age, dob: dep1.dob },
      { name: TestDataGenerator.getRandomName(), age: dep2.age, dob: dep2.dob }
    ];
    const validatePayload = {
      // dependentList: [
      //   { name: "Aryan Rai", age: 25, dob: "2001-02-15T18:30:00.000Z" },
      //   { name: "kalpesh", age: 10, dob: "2013-02-15T18:30:00.000Z" }
      // ],
      dependentList: dependents,
      planId: 15525,
      practiceId: 15050
    };
    const responseDepen = await this.validateDependent(validatePayload);
    const body = await responseDepen.json();

    const responseEmail = await this.checkEmail(email, practice);
    const checkBody = await responseEmail.json();

    const payload = {
      name: name,
      email: email,
      password: "Tudip@123",
      address: cityData.address,
      city: cityData.city,
      zip: cityData.zip,
      phone: phone,
      dependents: validatePayload.dependentList,
      discountId: null,
      paytype: "CREDIT",
      cardToken: "tok_visa",
      totalCharge: body.data.result.totalChargeToday,
      price: body.data.result.planPrice,
      nextPayDate: body.data.result.nextPaymentDate.split('T')[0],
      nextPayAmount: body.data.result.nextPaymentAmount,
      planId: 15525,
      practiceId: 15050,
      signature: "",
      source: "WEB"
    };

    // return await this.requestContext.post(
    //   '/member/api/signup/create',
    //   { data: payload }
    // ), dependents
    const response = await this.requestContext.post(
      '/member/api/signup/create',
      { data: payload }
    );

    console.log("Create member response status 5655666:",await response.body());
    const bodyCreate = await response.json();
    return {
      memberId: bodyCreate.data.result.id,
      email: email,
      dependents
    };
  }

  async getAgreement() {
    return await this.requestContext.get(
      `/member/api/members/agreement`
    );
  }

  async getDashboardDetails(memberId: string) {
    console.log("get dahs baord Fetching dashboard details for member ID:", memberId, typeof memberId);
    return await this.requestContext.get(
      `/member/api/members/dashboard/${memberId}`
    );
  }

  async getDependentDetails(memberId: string) {
    console.log("get dependent Fetching details for member ID:", memberId, typeof memberId);
    return await this.requestContext.get(
      `/member/api/dependents/${memberId}?page=0&size=20`
    );
  }

  async getProfile() {
    return await this.requestContext.get(
      `/member/api/members/profile`
    );
  }

  // async createMember(payload: any) {
  //   return await this.requestContext.post(
  //     '/member/api/signup/create',
  //     {
  //       data: payload
  //     }
  //   );
  // }
}
