import axios from "axios";
import { useState } from "react";

export interface IAxios {
  method: string;
  url: string;
  data?: any;
}

export const axiosData = async (value: IAxios) => {
  try {
    const response: any = await axios({
      method: value.method,
      url: value.url,
      data: value.data ? value.data : null,
    });

    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};
