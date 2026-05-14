import { ApiClient } from './apiClient';

export class AuthService extends ApiClient {

  async login(practiceId: string, payload: any) {
    const response = await this.requestContext.post(
      `/member/api/authenticate/${practiceId}`,
      { data: payload }
    );
    return response;
  }

  async getStorageState() {
    return await this.requestContext.storageState();
  }

  async practiceLogin() {
    const response = await this.requestContext.post(
      '/practice/api/authenticate',
      {
        data: {
          username: "jyotirmoyee.rout+1@tudip.com",
          password: "Tudip@123",
          rememberMe: true,
          captcha: "XXXX.DUMMY.TOKEN.XXXX",
          deviceId: "test-device-123"
        }
      }
    );
    return response;
  }

  // 4️⃣ Delete member using practice context
  async deleteMember( memberId: string) {
    const deleteMem = {
      deletedBy: "Nikhil Badgujar",
      deleteNote: "Deleting the member through automation"
    };

    const deleteCreatedMember = await this.requestContext.put(
      `/practice/api/members/delete/${memberId}`,
      ///practice/api/members/delete/${memberId}
      { data: deleteMem }
    );

    return deleteCreatedMember;
  }

  // const deleteCreatedMember = await practiceApi.put(
  //   `/practice/api/members/delete/${memberId}`,
  //   { data: deleteMem }
  // );

}
