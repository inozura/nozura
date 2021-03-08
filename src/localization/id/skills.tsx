import React from 'react';
import { Icon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    Saya sudah berpengalaman selama satu tahun mendalami{' '}
    <span className="font-bold text-gray-800">pengembangan web dan mobile</span> menggunakan{' '}
    <HighlightedTextIcon
      className="mx-2"
      icon={<Icon icon={javascriptIcon} style={{ fontSize: '24px' }} />}
      as="a"
      href="https://www.javascript.com/"
    >
      Javascript
    </HighlightedTextIcon>{' '}
    dan{' '}
    <HighlightedTextIcon
      as="a"
      href="https://www.typescriptlang.org/"
      className="mx-2"
      icon={<Icon icon={typescriptIcon} style={{ fontSize: '24px' }} />}
    >
      Typescript
    </HighlightedTextIcon>{' '}
    hingga saya cukup percaya diri untuk membangun aplikasi menggunakan:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
