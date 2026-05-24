interface GlobalErrorObject {
  message: string;
  errorName: 'global';
  cause?: string;

  // stack: not to be used in production code. Error stack is not sent if NODE_ENV will be set to PRODUCTION
  stack?: string;
  name?: string;
}

export type { GlobalErrorObject };
