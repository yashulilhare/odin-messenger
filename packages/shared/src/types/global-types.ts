interface GlobalErrorObject {
  message: string;
  errorName: 'global';
  cause?: string;

  // stack: not to be used in production code. Error stack is not sent if NODE_ENV will be set to PRODUCTION
  stack?: string;
  name?: string;
}

// this interface is for rejected promise caught error basic format used when fetching data
interface CatchBlockError {
  name?: string;
  errorName: 'catch-block';
  message: string;
  cause?: string;
}
export type { GlobalErrorObject, CatchBlockError };
