import { APIRequestContext, request } from '@playwright/test';

export class ApiClient {
  protected requestContext!: APIRequestContext;

  async init(storageState?: any) {
    this.requestContext = await request.newContext({
      baseURL: 'https://membership.boomclouddev.com',
      storageState: storageState,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }

  getContext() {
    return this.requestContext;
  }

  async dispose() {
    await this.requestContext.dispose();
  }
}
