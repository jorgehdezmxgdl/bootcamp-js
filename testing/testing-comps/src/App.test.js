import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/*
describe(name, fn) creates a block that groups together several related tests. 

test(name, fn, timeout)
The first argument is the test name; 
the second argument is a function that contains the expectations to test. 
The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.

it 
It is an alias for test. See: test()
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/open form dialog/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Put and validate email field', () => {
  it('Put mail and validate', () => {
    render(<App />);
    userEvent.click(screen.getByText('Open form dialog'));
    const email = screen.getByLabelText('e-mail');
    expect(email).toBeInTheDocument();
    expect(email).toHaveValue('');
    email.value = 'jorgehdezmxgdl@gmail.com';
    userEvent.click(screen.getByText('OK'));
    const response = screen.getByText(/the email is valid/i);
    expect(response).toBeInTheDocument();
  });
});


describe('Put a email address and check it not is correct', () => {
  it('Write and check', () => {
    render(<App />);
    userEvent.click(screen.getByText('Open form dialog'));
    const email = screen.getByLabelText('e-mail');
    expect(email).toBeInTheDocument();
    expect(email).toHaveValue('');
    email.value = 'jorgehdezmxgdl@@gmail.com';
    userEvent.click(screen.getByText('OK'));
    const response = screen.getByText(/the email is not valid/i);
    expect(response).toBeInTheDocument();
  });
});

