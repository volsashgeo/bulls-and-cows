import { describe, it, expect } from 'vitest';
import { createDigitValidator } from '../src/core/digitValidator.js';

describe('createDigitValidator', () => {
    it('accepts only valid binary digits', () => {
        const v = createDigitValidator(2);
        expect(v('0')).toBe(true);
        expect(v('1')).toBe(true);
        expect(v('2')).toBe(false);
    });
});
