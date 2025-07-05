export type ErrorProps = {
  code?: string;
  title: string;
  description: string;
  resetErrorBoundary?: (...args: unknown[]) => void;
};

export class HttpError extends Error {
  code: string;

  constructor(code: string, name: string, message: string) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

type IHttpError = {
  [code: number]: (errorMessage?: string) => HttpError;
};

export const httpError: IHttpError = {
  401: () =>
    new HttpError(
      '401',
      'Unauthorized',
      'Your current user role is not authorized to acces this page. Please contact a Platform Administor for more information.',
    ),
  404: () =>
    new HttpError('404', 'Page not Found', "We're sorry, but the page you are looking for could not be found."),
  500: (errorMessage?: string) => new HttpError('500', 'Server Error', errorMessage ?? ''),
};
