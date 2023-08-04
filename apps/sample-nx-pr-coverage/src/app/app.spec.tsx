import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome sample-nx-pr-coverage/gi)).toBeTruthy();
  });

  it('should have a name in greeting', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome salik/gi)).toBeTruthy();
  });
});
