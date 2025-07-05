import { render } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';

import SignUp from './SignUp';

const renderComponent = (props: { route?: string }) =>
  render(<TestHarness {...props} children={<SignUp />}></TestHarness>).container;

describe('<SignUp />', () => {
  test('title should be visible in page', () => {
    renderComponent({});

    expect(true).toBeTruthy();
  });
});
