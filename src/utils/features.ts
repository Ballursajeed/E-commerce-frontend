import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { messageResponse } from "../types/api-types";
import { SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

type ResType =
  | {
      data: messageResponse;
    }
  | {
      error: FetchBaseQueryError | SerializedError;
    };

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
) => {
  if ("data" in res) {
    toast.success(res.data.message);
    if (navigate) navigate(url);
  } else {
    const error = res.error as FetchBaseQueryError;
    const messageResponse = error.data as messageResponse;

    toast.error(messageResponse.message);
  }
};

export const getLastMonth = () => {
  const currentDate = moment();
  currentDate.date(1);

  const last6Month: string[] = [];
  const last12Month: string[] = [];

  for (let i = 0; i < 6; i++) {
    const monthData = currentDate.clone().subtract(i, "months");
    const monthName = monthData.format("MMMM");
    last6Month.unshift(monthName);
  }

  for (let i = 0; i < 12; i++) {
    const monthData = currentDate.clone().subtract(i, "months");
    const monthName = monthData.format("MMMM");
    last12Month.unshift(monthName);
  }

  return {
    last6Month,
    last12Month,
  };
};
