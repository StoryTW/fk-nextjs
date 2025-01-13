declare type BasicErrorModel = import('axios').AxiosError<{
  error?: string;
  error_code?: string;
}>;
