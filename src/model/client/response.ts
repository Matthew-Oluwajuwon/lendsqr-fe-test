/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
export namespace Apiresponse {
  export class API<T> {
    responseCode?: string | number;
    responseMessage: string = "";
    data?: T;
    accessToken: string = "";
    refreshToken: string = "";
  }
  export class UserInfo {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    gender?: string;
    dateOfBirth?: any;
    residenceAddress?: any;
    businessDTO?: BusinessDto;
  }

  export class BusinessDto {
    id?: number;
    name?: any;
    creationDate?: string;
    businessStatus?: string;
    businessType?: string;
    businessCategory?: string;
    kycDocumentDTO?: any;
    stateDTO?: StateDto;
    imageUrl?: string;
    businessAddress?: string;
  }

  export class BusinessCategories {
    name?: string;
    type?: string;
  }
  export class BusinessStatuses {
    name?: string;
    type?: string;
  }

  export class States {
    id?: number;
    name?: string;
  }

  export class KycDocument {
    id?: number;
    nationalIdentificationCard?: any;
    nationalIdentificationCardStatus?: string;
    certificateOfBusinessRegistration?: string;
    certificateOfBusinessRegistrationStatus?: any;
    articleOfIncorporation?: string;
    articleOfIncorporationStatus?: any;
    validIdentificationCard?: string;
    validIdentificationCardStatus?: any;
    residentPermit?: string;
    residentPermitStatus?: any;
    kycUploadComplete?: boolean;
    businessDTO?: BusinessDto;
    kycStatus?: string;
  }

  export class Registration {
    name?: unknown;
    creationDate?: string;
    businessStatus?: string;
    businessType?: string;
    businessCategory?: string;
    kycDocumentDTO?: unknown;
    stateDTO?: StateDto;
  }

  export class StateDto {
    id?: number;
    name?: string;
  }
  export class CityDto {
    id?: number;
    name?: string;
  }

  export class Cloudinary {
    asset_id?: string;
    public_id?: string;
    version?: string;
    version_id?: string;
    signature?: string;
    width?: number;
    height?: number;
    format?: string;
    resource_type?: string;
    created_at?: string;
    tags?: any[];
    bytes?: string;
    type?: string;
    etag?: string;
    placeholder?: boolean;
    url?: string;
    secure_url?: string;
    folder?: any;
    access_mode?: string;
    original_filename?: string;
  }
  export class TerminalDto {
    terminalName?: string;
    description?: string[];
    terminalId?: number;
    price?: number;
    currency?: string;
    subscription?: string;
    imageUrl?: string;
    cautionFeeAmount?: number;
    cautionFeeCurrency?: string
  }
  
  export class DeliveryMethods {
    name?: string;
    type?: string;
  }
  
  export class DeliveryAndPickUp {
    id?: number
    stateDTO?: StateDto
    cityDTO?: CityDto
    pickUpAddress?: string
  }
  
  export class TerminalPurchase {
    id?: number
    terminalProfileDTO?: TerminalProfileDto
    deliveryMethod?: string
    deliveryDetailsDTO?: DeliveryDetailsDto
    pickUpDetailsDTO?: PickUpDetailsDto
    quantity?: number
    businessDTO?: any
    totalCost?: number
    cautionFeeAmount?: number;
    cautionFeeCurrency?: string
  }
  
  export class TerminalProfileDto {
    terminalName?: string
    description?: any
    terminalId?: number
    imageUrl?: any
    price?: number
    currency?: any
    subscription?: any
    cautionFeeAmount?: number;
    cautionFeeCurrency?: string
  }
  
  export interface PickUpDetailsDto {
    id: number
    stateDTO: StateDto
    cityDTO: CityDto
    pickUpAddress: string
  }
  
  export class DeliveryDetailsDto {
    id?: number
    email?: string
    phoneNumber?: string
    residentialAddress?: string
    stateDTO?: any
    cityDTO?: any
  }
}
