import { viralAdvertising, requiredMinimumDays  } from './app';

/**
 * Tests for the viralAdvertising function.
 */

describe('viralAdvertising', () => {

  /**
   * Tests if the cumulative likes are calculated correctly.
   */
    it('should calculate cumulative likes correctly', () => {
      expect(viralAdvertising(5)).toBe(24);
    });
  });



/**
 * Tests for the requiredMinimumDays function.
 */

describe('requiredMinimumDays', () => {
  /**
   * Tests if the minimum number of days is calculated correctly.
   */
  it('should calculate minimum days correctly', () => {
    expect(requiredMinimumDays(24)).toBe(5);
  });
});