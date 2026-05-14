import { ApiClient } from '../core/apiClient';

export class DependentService extends ApiClient {

  async getDependentDetails(memberId: string) {
    console.log("get dependent Fetching details for member ID:", memberId, typeof memberId);
    return await this.requestContext.get(
      `/member/api/dependents/${memberId}?page=1&size=20`
    );
  }


}
