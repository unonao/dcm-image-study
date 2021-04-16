import { render, screen } from '@testing-library/react';
import Viewer from './Viewer';

test('renders learn react link', () => {
  render(<Viewer />);
  const linkElement = screen.getByText(/This is a viewer page/i);
  expect(linkElement).toBeInTheDocument();
});
