import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container';

describe('Container Component', () => {

    beforeEach(() => {
        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }));

        render(
            <BrowserRouter>
                <Container title="Test Container" showBackButton>
                    <div>Test Content</div>
                </Container>
            </BrowserRouter>
        );

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render title and content correctly', () => {
        const titleElement = screen.getByText('Test Container');
        const contentElement = screen.getByText('Test Content');

        expect(titleElement).toBeDefined();
        expect(contentElement).toBeDefined();
    });

    it('should render back button when showBackButton is true', () => {
        const backButton = screen.getByText('←');
        expect(backButton).toBeDefined();
    });

    it('should not render back button when showBackButton is false', () => {
        cleanup();
        render(
            <BrowserRouter>
                <Container title="Test Container" showBackButton={false} >
                    <div>Test Content</div>
                </Container>
            </BrowserRouter>
        );

        const backButton = screen.queryByText('←');
        expect(backButton).toBeNull();
    });
});
