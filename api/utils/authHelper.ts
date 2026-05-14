// import { AuthService } from '../core/authService';

// export async function loginAndGetStorage(
//   practiceId: string,
//   payload: any
// ) {
//   const auth = new AuthService();
//   await auth.init();
//   const response = await auth.login(practiceId, payload);

//   if (response.status() !== 201) {
//     throw new Error('Login failed');
//   }

//   const storageState = await auth.getStorageState();
//   await auth.dispose();

//   return storageState;
// }
