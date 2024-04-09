/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apirequest {
  export class CreateBusiness {
    businessName?: string;
    businessType?: string;
    businessCategory?: string;
    businessStatus?: string;
    imageUrl?: string;
    stateId?: number;
    userRequestDTO?: UserRequestDto;
  }

  export class UserRequestDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    gender?: string;
    dateOfBirth?: string;
    residenceAddress?: string;
  }

  export class Login {
    username?: string;
    password?: string;
  }
}
