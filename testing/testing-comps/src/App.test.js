import { render, screen } from '@testing-library/react';
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


