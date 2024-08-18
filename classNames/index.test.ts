import { classNames } from './index';

describe('classNames', () => {

  test('without params', () => {
    expect(classNames()).toBe('');
  });

  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with modifiers', () => {
    const expected = 'someClass hovered scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with modifiers false', () => {
    const expected = 'someClass hovered class1 class2';
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with modifiers undefined', () => {
    const expected = 'someClass hovered class1 class2';
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('with modifiers and additional class', () => {
    const expected = 'someClass hide class1 class2';
    expect(classNames(
      'someClass',
      {hovered: undefined, scrollable: false, hide: true },
      ['class1', 'class2'])
    ).toBe(
      expected,
    );
  });
});
