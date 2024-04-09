/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { FORM_ACTION } from "../../utils/helper";
import { Apiresponse } from "../client/response";

export namespace State {
  export interface App {
    request: any;
    response: any;
    current: number;
    steps: Array<Steps>;
    showSteps: boolean;
    isPasswordLength: boolean;
    isUpperCase: boolean;
    isLowerCase: boolean;
    hasNumber: boolean;
    isSpecialChar: boolean;
    showSuccessModal?: boolean;
    selectUrl?: string;
    menuCollapsed: boolean;
    selectedKey: string;
    openKey?: string;
    pageTitle: string;
    breadcrumb: string;
    record: any;
    showLogoutModal: boolean;
    openMenuDrawer: boolean;
    searchTerm?: any;
    action?: FORM_ACTION;
    postUrl: string;
    getUrl: string;
    updateUrl: string;
    uploadUrl?: string;
    getPostUrl?: string;
    deleteUrl: string;
    selectField?: string;
    page?: any;
    pageSize?: any;
    tabName?: string;
    tabKey?: number;
    tabKeyName?: string;
    error?: any;
    showErrorModal?: boolean;
    progressCurrent?: number;
    showModal?: boolean;
    currentSelectedTabKey?: string;
    showWithdrawalModal?: boolean;
    fileList?: KycFileList;
    businessCategories?: Array<Apiresponse.BusinessCategories>;
    businessStatuses?: Array<Apiresponse.BusinessStatuses>;
    states?: Array<Apiresponse.States>;
    imageFileSize?: string;
    imageFileType?: string;
    uploadModal?: boolean;
    deliveryMethods?: Array<Apiresponse.DeliveryMethods>;
    cities?: Array<Apiresponse.CityDto>;
    stateId?: number;
    cityId?: number;
    deliveryAndPickup?: Array<Apiresponse.DeliveryAndPickUp>;
    userInfo?: Apiresponse.UserInfo;
    showTerminalDetailsModal?: boolean;
    selectedTerminalDetails?: Apiresponse.TerminalPurchase;
    kycUploadInfo?: Apiresponse.KycDocument;
    showDeactivateTerminalModal?: boolean;
  }

  export interface Steps {
    content: React.ReactNode;
  }

  export class FileList {
    uid?: string;
    name?: string;
    status?: "done";
    url?: string;
    thumbUrl?: string;
  }

  export class KycFileList {
    nationalIdCard?: FileList[];
    certificateOfBusinessRegistration?: FileList[];
    articlesOfIncorporation?: FileList[];
    validIdentificationCardForEachSignatory?: FileList[];
    residentPermitSignatories?: FileList[];
  }
}
