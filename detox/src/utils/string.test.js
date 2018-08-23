describe('string', () => {
  let string;

  beforeEach(() => {
    string = require('./string');
  });

  describe('lowerCamelCaseJoin', () => {
    it(`should capitalize first letter of each array item after the first`, () => {
      expect(string.lowerCamelCaseJoin(['foo', 'bar'])).toBe('fooBar');
    });
    it(`should gracefully handle an empty array`, () => {
      expect(string.lowerCamelCaseJoin([])).toBe('');
    });
    it(`should gracefully handle empty input`, () => {
      expect(string.lowerCamelCaseJoin()).toBe('');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it(`should capitalize first letter`, () => {
      expect(string.capitalizeFirstLetter('blah')).toBe('Blah');
    });
    it(`should gracefully handle an empty string`, () => {
      expect(string.capitalizeFirstLetter('')).toBe('');
    });
    it(`should gracefully handle empty input`, () => {
      expect(string.capitalizeFirstLetter()).toBe('');
    });
  });

  describe('ensureSuffix', () => {
    it(`should add suffix if there is none`, () => {
      expect(string.ensureSuffix('iPhone X', '-Detox')).toBe('iPhone X-Detox');
    });
    it(`should not add suffix if there is one`, () => {
      expect(string.ensureSuffix('iPhone X-Detox', '-Detox')).toBe('iPhone X-Detox');
    });
  });
});
