import { render, screen } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

import { HttpError } from '../types';
import ErrorFallback from './ErrorFallback';

const renderComponent = (props: { route?: string; error: Error }) => {
  const { route, error } = props;

  return render(
    <TestHarness route={route}>
      <ErrorFallback error={error} resetErrorBoundary={jest.fn()} />
    </TestHarness>,
  ).container;
};

describe('<ErrorFallback />', () => {
  test('deafult error title should be visible in page', () => {
    const error = new Error('test no a HTTPError');

    renderComponent({ error });

    expect(screen.queryByText('Something went wrong')).toBeVisible();
  });

  test('http error title should be visible in page', () => {
    const code = '404';
    const title = 'test error title';
    const message = 'test error message';
    const error = new HttpError(code, title, message);

    renderComponent({ error });

    expect(screen.queryByText(code)).toBeVisible();
    expect(screen.queryByText(title)).toBeVisible();
    expect(screen.queryByText(message)).toBeVisible();
  });
});
