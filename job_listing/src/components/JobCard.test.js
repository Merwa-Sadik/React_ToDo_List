import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobCard from './JobCard';

const mockJob = {
  id: '123',
  title: 'Software Engineer',
  orgName: 'Tech Corp',
  description: 'Great opportunity',
  location: ['Remote'],
  opType: 'Full-time',
  categories: ['Engineering', 'Tech']
};

describe('JobCard Component', () => {
  test('renders job card with job details', () => {
    render(<JobCard job={mockJob} isBookmarked={false} />);
    
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Great opportunity')).toBeInTheDocument();
  });

  test('displays bookmark button', () => {
    render(<JobCard job={mockJob} isBookmarked={false} />);
    
    const bookmarkButton = screen.getByTestId('bookmark-button');
    expect(bookmarkButton).toBeInTheDocument();
    expect(screen.getByText('Bookmark')).toBeInTheDocument();
  });

  test('shows bookmarked state when job is bookmarked', () => {
    render(<JobCard job={mockJob} isBookmarked={true} />);
    
    expect(screen.getByText('Bookmarked')).toBeInTheDocument();
  });

  test('calls onBookmarkToggle when bookmark button is clicked', () => {
    const mockToggle = jest.fn();
    render(<JobCard job={mockJob} isBookmarked={false} onBookmarkToggle={mockToggle} />);
    
    const bookmarkButton = screen.getByTestId('bookmark-button');
    fireEvent.click(bookmarkButton);
    
    expect(mockToggle).toHaveBeenCalledWith('123');
  });

  test('renders categories when provided', () => {
    render(<JobCard job={mockJob} isBookmarked={false} />);
    
    expect(screen.getByText('Engineering')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
  });
});
