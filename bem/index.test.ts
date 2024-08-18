import { bem } from './index';

describe('bem', () => {
  const exampleStyles = {
    someClass: 'someClass_hash',
    someClass__element: 'someClass__element_hash',
    someClass__element_hovered: 'someClass__element_hovered_hash',
    someClass__element_scrollable: 'someClass__element_scrollable_hash',
    someClass__element_hide: 'someClass__element_hide_hash',
    someClass_hovered: 'someClass_hovered_hash',
    someClass_scrollable: 'someClass_scrollable_hash',
    someClass_hide: 'someClass_hide_hash',
  };

  //---------------------------------------------------------------------

  test('without block class and module', () => {
    const b = bem('', {})
    expect(b(
      'element',
      {
        hovered: false,
        scrollable: undefined,
        hide: true,
      },
      ['additionalClass', 'additionalClass2']
    )).toBe('element element_hide additionalClass additionalClass2');
  });

  test('without block class', () => {
    const b = bem('', exampleStyles)
    expect(b(
      'element',
      {
        hovered: false,
        scrollable: undefined,
        hide: true,
      },
      ['additionalClass', 'additionalClass2']
    )).toBe('element element_hide additionalClass additionalClass2');
  });

  //----------------------------------------------------------------------

  test('with params', () => {
    const b = bem('someClass')

    expect(b(
      'element',
      {
        hovered: false,
        scrollable: undefined,
        hide: true,
      },
      ['additionalClass', 'additionalClass2']
    )).toBe('someClass__element someClass__element_hide additionalClass additionalClass2');
  });

  //---------------------------------------------------------------------

  const b = bem('someClass', exampleStyles)

  test('without params', () => {
    expect(b()).toBe('someClass_hash');
  });


  //---------------------------------------------------------------------

  test('with only element name params', () => {
    expect(b('element')).toBe('someClass__element_hash');
  });

  test('with only modifier params', () => {
    expect(b('', {
      hovered: true,
      scrollable: undefined,
      hide: false,
    })).toBe('someClass_hash someClass_hovered_hash');
  });

  test('with only additional params', () => {
    expect(b('', {}, ['additionalClass'])).toBe('someClass_hash additionalClass');
  });

  //---------------------------------------------------------------------

  test('with element name and modifier params', () => {
    expect(b('element', {
      hovered: true,
      scrollable: undefined,
      hide: false,
    })).toBe('someClass__element_hash someClass__element_hovered_hash');
  });

  test('with element name and additional params', () => {
    expect(b('element', {
      hovered: true,
      scrollable: undefined,
      hide: false,
    })).toBe('someClass__element_hash someClass__element_hovered_hash');
  });


  test('with all params', () => {
    expect(b(
      'element',
      {
        hovered: false,
        scrollable: undefined,
        hide: true,
      },
      ['additionalClass', 'additionalClass2']
    )).toBe('someClass__element_hash someClass__element_hide_hash additionalClass additionalClass2');
  });

  //---------------------------------------------------------------------

  test('with unknown element name params', () => {
    expect(b(
      'someElement'
    )).toBe('someClass__someElement');
  });

  test('with unknown modifier params', () => {
    expect(b(
      '',
      {
        show: true,
      }
    )).toBe('someClass_hash someClass_show');
  });

  test('with element name and unknown modifier params', () => {
    expect(b(
      'element',
      {
        show: true,
      }
    )).toBe('someClass__element_hash someClass__element_show');
  });

  test('with unknown element name and unknown modifier params', () => {
    expect(b(
      'someElement',
      {
        show: true,
      }
    )).toBe('someClass__someElement someClass__someElement_show');
  });

});
