import { render, screen } from '@testing-library/react';
import Viewer from './Viewer';

test('renders learn react link', () => {
  render(<Viewer />);
  const linkElement = screen.getByText(/Cornerstone React Component Example/i);
  expect(linkElement).toBeInTheDocument();
});
