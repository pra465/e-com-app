import Button from './Button';

export default {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const CTA = {
  args: {
    classname: 'CTA',
    label: 'Shop Now',
  },
};

export const Primary = {
  args: {
    classname: 'Primary',
    label: 'Buy Now',
  },
};
