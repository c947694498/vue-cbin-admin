import { AxiosResponse } from "axios";

type StandResData<T> = {
  err: number,
  msg: string
} & T

type StandResponse<T> = Promise<AxiosResponse<StandResData<T>>>