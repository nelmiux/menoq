import { act, fireEvent, render, screen } from '@testing-library/react';

import { TestHarness } from '@/_test/TestHarness';
import { error } from '@/store/errorSlice';
import { store } from '@/store/store';

import ErrorAlert from './ErrorAlert';

const errorMessage = 'test error';
const closeButtonId = 'closeButton';

const renderComponent = (props: { route?: string }) =>
  render(<TestHarness {...props} children={<ErrorAlert />}></TestHarness>).container;

describe('<ErrorAlert />', () => {
  test('Error alert is in the document', async () => {
    renderComponent({});

    act(() => {
      store.dispatch(error(errorMessage));
    });

    // expect(await screen.findByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByTestId(closeButtonId)).toBeInTheDocument();
  });

  test('Error alert is closed when clicking the close button', async () => {
    renderComponent({});

    store.dispatch(error(errorMessage));

    // expect(await screen.findByText(errorMessage)).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByTestId(closeButtonId));
    });

    expect(screen.queryByText(errorMessage)).toBeNull();
  });
});
