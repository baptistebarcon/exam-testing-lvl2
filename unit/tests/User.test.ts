import { describe, it, expect } from 'vitest';
import { User } from '../src/User';

describe('User', () => {
  it('should be able to borrow when under limit', () => {
    const user = new User('u1', 'Alice', 'alice@example.com', 'standard');
    expect(user.canBorrow()).toBe(true);
  });

  it('should not be able to borrow when limit reached', () => {
    const user = new User('u1', 'Alice', 'alice@example.com', 'standard');
    user.currentLoans = ['b1', 'b2', 'b3'];
    expect(user.canBorrow()).toBe(false);
  });

  it('should add a loan if not already present', () => {
    const user = new User('u1', 'Bob', 'bob@example.com');
    user.addLoan('b1');
    expect(user.currentLoans).toContain('b1');
  });

  it('should not add duplicate loan', () => {
    const user = new User('u1', 'Bob', 'bob@example.com');
    user.addLoan('b1');
    user.addLoan('b1');
    expect(user.currentLoans.length).toBe(1);
  });

  it('should remove a loan properly', () => {
    const user = new User('u1', 'Bob', 'bob@example.com');
    user.addLoan('b1');
    user.removeLoan('b1');
    expect(user.currentLoans).not.toContain('b1');
  });
});
