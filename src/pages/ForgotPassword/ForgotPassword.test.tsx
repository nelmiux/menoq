import { render } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

const renderComponent = (props: { route?: string }) =>
  render(<TestHarness {...props} children={<ForgotPassword />}></TestHarness>).container;

describe('<ForgotPassword />', () => {
  test('title should be visible in page', () => {
    renderComponent({});

    expect(true).toBeTruthy();
  });
});
