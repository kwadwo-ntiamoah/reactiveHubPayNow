import {
    pendingIcon,
    failedIcon,
    unapprovedIcon,
    successIcon,
  } from "@/assets/svgs";
import { StatusType } from "../model/transaction.model";

export const getIcon = (status: StatusType) => {
    switch (status) {
      case "success":
        return successIcon;
      case "failed":
        return failedIcon;
      case "pending":
        return pendingIcon;
      default:
        return unapprovedIcon;
    }
  };