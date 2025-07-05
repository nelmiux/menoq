import Error from '@/error/pages/Error';
import { HttpError } from '@/error/types';

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary?: (...args: unknown[]) => void;
}) => {
  const handleError = () => {
    let code = '400';
    let title = 'Something went wrong';
    const description = error.message;

    if (error instanceof HttpError) {
      code = error.code;
      title = error.name;
    }

    return <Error code={code} title={title} description={description} resetErrorBoundary={resetErrorBoundary}></Error>;
  };

  return handleError();
};

export default ErrorFallback;
