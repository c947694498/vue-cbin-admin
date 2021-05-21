import { StandResponse } from "../typings/request";
import request from "../utils/request";

interface ReqData {
  account: string;
  password: string;
}

interface ResData {
  info: object;
}

export default function login(data: ReqData): StandResponse<ResData> {
  return request.post("login", data)
}
