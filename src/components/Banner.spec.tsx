import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  const title = 'Sample Title';
  const url = 'sample-url.jpg';

  beforeEach(() => {
    render(<Banner title={title} url={url} />);
  });

  it('should render the title and image correctly', () => {
    expect(screen.findByRole('h1')).toBeTruthy();
    expect(screen.getByText(title)).toBeTruthy();

    expect(screen.findByRole('img')).toBeTruthy();
  });
});
