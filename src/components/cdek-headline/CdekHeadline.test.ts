import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import CdekHeadline from './CdekHeadline.vue';

type SizeT = '1' | '2' | '3' | '4' | '5' | '6' | '7';
type SizeOptions = {
  size?: SizeT;
  smSize?: SizeT;
  mdSize?: SizeT;
  lgSize?: SizeT;
  xlSize?: SizeT;
  xxlSize?: SizeT;
};

const createCdekHeadline = ({
  size,
  smSize,
  mdSize,
  lgSize,
  xlSize,
  xxlSize,
}: SizeOptions) => {
  return mount(CdekHeadline as any, {
    props: {
      size,
      smSize,
      mdSize,
      lgSize,
      xlSize,
      xxlSize,
    },
  });
};

describe('Unit: CdekHeadline', () => {
  describe('Теги когда указан только 1 размер', () => {
    test.each([
      { size: '1', tag: 'H1' },
      { size: '2', tag: 'H2' },
      { size: '3', tag: 'H3' },
      { size: '4', tag: 'H4' },
      { size: '5', tag: 'H5' },
      { size: '6', tag: 'H6' },
      { size: '7', tag: 'H7' },
    ])('Если size = $size, то тег $tag', ({ size, tag }: any) => {
      const wrapper = createCdekHeadline({ size });
      expect(wrapper.element.tagName).eq(tag);
    });
  });

  describe('Теги когда указано несколько размеров тег всегда div', () => {
    test.each([
      { size: '1', mdSize: '4' },
      { size: '2', smSize: '5' },
      { size: '3', lgSize: '6', xxlSize: '7' },
      { size: '4', xlSize: '1' },
      { size: '5', xxlSize: '2' },
      { size: '5', xxlSize: '2', mdSize: '4' },
    ])(
      'Если size = $size и есть другие размеры: smSize = $smSize, mdSize = $mdSize, lgSize = $lgSize, xlSize = $xlSize, xxlSize = $xxlSize тег div',
      ({ size, smSize, mdSize, lgSize, xlSize, xxlSize }: any) => {
        const wrapper = createCdekHeadline({
          size,
          smSize,
          mdSize,
          lgSize,
          xlSize,
          xxlSize,
        });
        expect(wrapper.element.tagName).eq('DIV');
      }
    );
  });

  describe('size', () => {
    test.each([
      { size: '1', sizeClass: 'headline-1' },
      { size: '2', sizeClass: 'headline-2' },
      { size: '3', sizeClass: 'headline-3' },
      { size: '4', sizeClass: 'headline-4' },
      { size: '5', sizeClass: 'headline-5' },
      { size: '6', sizeClass: 'headline-6' },
      { size: '7', sizeClass: 'headline-7' },
    ])(
      'Если size = $size, то должен быть класс $sizeClass',
      ({ size, sizeClass }: any) => {
        const wrapper = createCdekHeadline({ size });
        expect(wrapper.classes(sizeClass)).toBeTruthy();
      }
    );
  });

  describe('size sm', () => {
    test.each([
      {
        size: '1',
        smSize: '7',
        sizeClass: 'headline-1',
        smClass: 'headline-sm-7',
      },
      {
        size: '2',
        smSize: '6',
        sizeClass: 'headline-2',
        smClass: 'headline-sm-6',
      },
      {
        size: '3',
        smSize: '5',
        sizeClass: 'headline-3',
        smClass: 'headline-sm-5',
      },
      {
        size: '4',
        smSize: '4',
        sizeClass: 'headline-4',
        smClass: 'headline-sm-4',
      },
      {
        size: '5',
        smSize: '3',
        sizeClass: 'headline-5',
        smClass: 'headline-sm-3',
      },
      {
        size: '6',
        smSize: '2',
        sizeClass: 'headline-6',
        smClass: 'headline-sm-2',
      },
      {
        size: '7',
        smSize: '1',
        sizeClass: 'headline-7',
        smClass: 'headline-sm-1',
      },
    ])(
      'Если size = $size и smSize = $smSize, то должен быть класс $sizeClass и $smClass',
      ({ size, smSize, sizeClass, smClass }: any) => {
        const wrapper = createCdekHeadline({ size, smSize });

        expect(wrapper.classes(sizeClass)).toBeTruthy();
        expect(wrapper.classes(smClass)).toBeTruthy();
      }
    );
  });

  describe('size md', () => {
    test.each([
      {
        size: '1',
        mdSize: '7',
        sizeClass: 'headline-1',
        mdClass: 'headline-md-7',
      },
      {
        size: '2',
        mdSize: '6',
        sizeClass: 'headline-2',
        mdClass: 'headline-md-6',
      },
      {
        size: '3',
        mdSize: '5',
        sizeClass: 'headline-3',
        mdClass: 'headline-md-5',
      },
      {
        size: '4',
        mdSize: '4',
        sizeClass: 'headline-4',
        mdClass: 'headline-md-4',
      },
      {
        size: '5',
        mdSize: '3',
        sizeClass: 'headline-5',
        mdClass: 'headline-md-3',
      },
      {
        size: '6',
        mdSize: '2',
        sizeClass: 'headline-6',
        mdClass: 'headline-md-2',
      },
      {
        size: '7',
        mdSize: '1',
        sizeClass: 'headline-7',
        mdClass: 'headline-md-1',
      },
    ])(
      'Если size = $size и mdSize = $mdSize, то должен быть класс $sizeClass и $mdClass',
      ({ size, mdSize, sizeClass, mdClass }: any) => {
        const wrapper = createCdekHeadline({ size, mdSize });

        expect(wrapper.classes(sizeClass)).toBeTruthy();
        expect(wrapper.classes(mdClass)).toBeTruthy();
      }
    );
  });

  describe('size lg', () => {
    test.each([
      {
        size: '1',
        lgSize: '7',
        sizeClass: 'headline-1',
        lgClass: 'headline-lg-7',
      },
      {
        size: '2',
        lgSize: '6',
        sizeClass: 'headline-2',
        lgClass: 'headline-lg-6',
      },
      {
        size: '3',
        lgSize: '5',
        sizeClass: 'headline-3',
        lgClass: 'headline-lg-5',
      },
      {
        size: '4',
        lgSize: '4',
        sizeClass: 'headline-4',
        lgClass: 'headline-lg-4',
      },
      {
        size: '5',
        lgSize: '3',
        sizeClass: 'headline-5',
        lgClass: 'headline-lg-3',
      },
      {
        size: '6',
        lgSize: '2',
        sizeClass: 'headline-6',
        lgClass: 'headline-lg-2',
      },
      {
        size: '7',
        lgSize: '1',
        sizeClass: 'headline-7',
        lgClass: 'headline-lg-1',
      },
    ])(
      'Если size = $size и lgSize = $lgSize, то должен быть класс $sizeClass и $lgClass',
      ({ size, lgSize, sizeClass, lgClass }: any) => {
        const wrapper = createCdekHeadline({ size, lgSize });

        expect(wrapper.classes(sizeClass)).toBeTruthy();
        expect(wrapper.classes(lgClass)).toBeTruthy();
      }
    );
  });

  describe('size xl', () => {
    test.each([
      {
        size: '1',
        xlSize: '7',
        sizeClass: 'headline-1',
        xlClass: 'headline-xl-7',
      },
      {
        size: '2',
        xlSize: '6',
        sizeClass: 'headline-2',
        xlClass: 'headline-xl-6',
      },
      {
        size: '3',
        xlSize: '5',
        sizeClass: 'headline-3',
        xlClass: 'headline-xl-5',
      },
      {
        size: '4',
        xlSize: '4',
        sizeClass: 'headline-4',
        xlClass: 'headline-xl-4',
      },
      {
        size: '5',
        xlSize: '3',
        sizeClass: 'headline-5',
        xlClass: 'headline-xl-3',
      },
      {
        size: '6',
        xlSize: '2',
        sizeClass: 'headline-6',
        xlClass: 'headline-xl-2',
      },
      {
        size: '7',
        xlSize: '1',
        sizeClass: 'headline-7',
        xlClass: 'headline-xl-1',
      },
    ])(
      'Если size = $size и xlSize = $xlSize, то должен быть класс $sizeClass и $xlClass',
      ({ size, xlSize, sizeClass, xlClass }: any) => {
        const wrapper = createCdekHeadline({ size, xlSize });

        expect(wrapper.classes(sizeClass)).toBeTruthy();
        expect(wrapper.classes(xlClass)).toBeTruthy();
      }
    );
  });

  describe('size xxl', () => {
    test.each([
      {
        size: '1',
        xxlSize: '7',
        sizeClass: 'headline-1',
        xxlClass: 'headline-xxl-7',
      },
      {
        size: '2',
        xxlSize: '6',
        sizeClass: 'headline-2',
        xxlClass: 'headline-xxl-6',
      },
      {
        size: '3',
        xxlSize: '5',
        sizeClass: 'headline-3',
        xxlClass: 'headline-xxl-5',
      },
      {
        size: '4',
        xxlSize: '4',
        sizeClass: 'headline-4',
        xxlClass: 'headline-xxl-4',
      },
      {
        size: '5',
        xxlSize: '3',
        sizeClass: 'headline-5',
        xxlClass: 'headline-xxl-3',
      },
      {
        size: '6',
        xxlSize: '2',
        sizeClass: 'headline-6',
        xxlClass: 'headline-xxl-2',
      },
      {
        size: '7',
        xxlSize: '1',
        sizeClass: 'headline-7',
        xxlClass: 'headline-xxl-1',
      },
    ])(
      'Если size = $size и smSize = $xxlSize, то должен быть класс $sizeClass и $xxlClass',
      ({ size, xxlSize, sizeClass, xxlClass }: any) => {
        const wrapper = createCdekHeadline({ size, xxlSize });

        expect(wrapper.classes(sizeClass)).toBeTruthy();
        expect(wrapper.classes(xxlClass)).toBeTruthy();
      }
    );
  });

  describe('Несколько размеров', () => {
    test('size=7, mdSize=4, xxlSize=1', () => {
      const wrapper = createCdekHeadline({
        size: '7',
        mdSize: '4',
        xxlSize: '1',
      });

      expect(wrapper.classes('headline-7')).toBeTruthy();
      expect(wrapper.classes('headline-md-4')).toBeTruthy();
      expect(wrapper.classes('headline-xxl-1')).toBeTruthy();
    });
    test('size=7, smSize=6, mdSize=4, lgSize=3, xlSize=2, xxlSize=1', () => {
      const wrapper = createCdekHeadline({
        size: '7',
        smSize: '6',
        mdSize: '4',
        lgSize: '3',
        xlSize: '2',
        xxlSize: '1',
      });

      expect(wrapper.classes('headline-7')).toBeTruthy();
      expect(wrapper.classes('headline-sm-6')).toBeTruthy();
      expect(wrapper.classes('headline-md-4')).toBeTruthy();
      expect(wrapper.classes('headline-lg-3')).toBeTruthy();
      expect(wrapper.classes('headline-xl-2')).toBeTruthy();
      expect(wrapper.classes('headline-xxl-1')).toBeTruthy();
    });
  });
});
