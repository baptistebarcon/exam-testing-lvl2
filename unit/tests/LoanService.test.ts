import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoanService } from '../src/LoanService';
import { Book } from '../src/Book';
import { User } from '../src/User';

describe('LoanService', () => {
  let service: LoanService;
  let book: Book;
  let user: User;

  beforeEach(() => {
    service = new LoanService();
    book = new Book('b1', 'Title', 'Author');
    user = new User('u1', 'User', 'email@test.com', 'standard');
    service.addBook(book);
    service.addUser(user);
  });

  describe('borrowBook', () => {
    it('should allow borrowing if book available and user can borrow', () => {
      const result = service.borrowBook('b1', 'u1');
      expect(result).toBe(true);
      expect(book.status).toBe('borrowed');
      expect(book.borrowedBy).toBe('u1');
      expect(user.currentLoans).toContain('b1');
    });

    it('should return false if book does not exist', () => {
      const result = service.borrowBook('invalid', 'u1');
      expect(result).toBe(false);
    });

    it('should return false if user cannot borrow', () => {
      user.currentLoans = ['x1', 'x2', 'x3'];
      const result = service.borrowBook('b1', 'u1');
      expect(result).toBe(false);
    });

    it('should return false if book not available', () => {
      book.status = 'borrowed';
      const result = service.borrowBook('b1', 'u1');
      expect(result).toBe(false);
    });
  });

  describe('returnBook', () => {
    it('should return book and reset status with no penalty', () => {
      service.borrowBook('b1', 'u1', new Date('2024-01-01'));
      const result = service.returnBook('b1', new Date('2024-01-10'));
      expect(result).toBe(0);
      expect(book.status).toBe('available');
      expect(book.borrowedBy).toBeUndefined();
    });

    it('should calculate penalty for late return', () => {
      service.borrowBook('b1', 'u1', new Date('2024-01-01'));
      const result = service.returnBook('b1', new Date('2024-02-01'));
      expect(result).toBeGreaterThan(0);
    });

    it('should return -1 if book not found', () => {
      const result = service.returnBook('invalid');
      expect(result).toBe(-1);
    });

    it('should return -1 if book is not borrowed', () => {
      const result = service.returnBook('b1');
      expect(result).toBe(-1);
    });
  });

  describe('getAvailableBooks & getBorrowedBooks', () => {
    it('should list available books', () => {
      expect(service.getAvailableBooks()).toHaveLength(1);
    });

    it('should list borrowed books after loan', () => {
      service.borrowBook('b1', 'u1');
      expect(service.getBorrowedBooks()).toHaveLength(1);
    });
  });

  describe('getOverdueBooks', () => {
    it('should detect overdue books', () => {
      service.borrowBook('b1', 'u1', new Date('2024-01-01'));
      const overdue = service.getOverdueBooks(new Date('2024-03-01'));
      expect(overdue).toContain(book);
    });
  });
});
