import { render, screen } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

import Error from './Error';

const renderComponent = (props: { route?: string; code?: string; title?: string; description?: string }) => {
  const { route, code, title, description } = props;

  return render(
    <TestHarness route={route}>
      <Error code={code} title={title ?? ''} description={description ?? ''} resetErrorBoundary={jest.fn()} />
    </TestHarness>,
  ).container;
};

describe('<Error />', () => {
  test('test error code should be visible in page', () => {
    const code = '404';

    renderComponent({ code });

    expect(screen.queryByText(code)).toBeVisible();
  });

  test('test error title should be visible in page', () => {
    const title = 'test error title';

    renderComponent({ title });

    expect(screen.queryByText(title)).toBeVisible();
  });

  test('test error description should be visible in page', () => {
    const description = 'test error description';

    renderComponent({ description });

    expect(screen.queryByText(description)).toBeVisible();
  });
});
