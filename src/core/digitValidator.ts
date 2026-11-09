export type Base = 2 | 8 | 10 | 16;

export const BASES: readonly Base[] = [2, 8, 10, 16];
export const MIN_LENGTH = 2;
export const MAX_LENGTH = 6;

const DIGITS_BY_BASE: Record<Base, string> = {
    2: '01',
    8: '01234567',
    10: '0123456789',
    16: '0123456789abcdef',
};

export const createDigitValidator =
    (base: Base) =>
    (char: string): boolean => {
        if (typeof char !== 'string' || char.length !== 1) return false;
        return DIGITS_BY_BASE[base].includes(char.toLowerCase());
    };

export const digitCount = (base: Base): number => DIGITS_BY_BASE[base].length;

export const allowedLengths = (base: Base): number[] => {
    const max = Math.min(MAX_LENGTH, digitCount(base));
    return Array.from({ length: max - MIN_LENGTH + 1 }, (_, i) => MIN_LENGTH + i);
};
