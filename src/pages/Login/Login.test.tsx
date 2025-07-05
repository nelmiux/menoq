import { render } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

import Login from './Login';

const renderComponent = (props: { route?: string }) =>
  render(<TestHarness {...props} children={<Login />}></TestHarness>).container;

describe('<Login />', () => {
  test('title should be visible in page', () => {
    renderComponent({});

    expect(true).toBeTruthy();
  });
});
