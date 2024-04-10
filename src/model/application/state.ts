/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { FORM_ACTION } from "../../utils/helper";
import { Apiresponse } from "../client/response";

export namespace State {
  export interface App {
    request: any;
    response: any;
    current: number;
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
    users?: Array<Apiresponse.Users>
  }
}
