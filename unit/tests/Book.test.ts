import { describe, it, expect } from 'vitest';
import { Book } from '../src/Book';

describe('Book', () => {
  const book = new Book('1', '1984', 'George Orwell');

  it('should initialize with status "available"', () => {
    expect(book.status).toBe('available');
  });

  it('isAvailable should return true for available book', () => {
    expect(book.isAvailable()).toBe(true);
  });

  it('isBorrowed should return false initially', () => {
    expect(book.isBorrowed()).toBe(false);
  });

  it('isInMaintenance should return false initially', () => {
    expect(book.isInMaintenance()).toBe(false);
  });

  it('should return true when status is changed to "borrowed"', () => {
    book.status = 'borrowed';
    expect(book.isBorrowed()).toBe(true);
  });
});
