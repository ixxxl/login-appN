import axios from "axios";

export enum EData {
  method = "",
  url = "http://localhost:3030/users",
  data = "",
}

export const axiosData = async (value: EData) => {
  try {
    const response: any = await axios({
      method: EData.method,
      url: EData.url,
      data: EData.data,
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
