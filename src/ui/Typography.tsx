import clsx from 'clsx';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'blockquote'
  | 'label';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: Variant;
  children: React.ReactNode;
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'danger'
    | 'success'
    | 'warning'
    | 'default';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
}

// text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl

const variantMap: Record<Variant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  span: 'text-base',
  blockquote: 'text-lg italic border-l-4 pl-4 border-gray-300',
  label: 'text-sm font-medium',
};

const colorMap: Record<NonNullable<TypographyProps['color']>, string> = {
  primary: 'text-blue-600',
  secondary: 'text-gray-600',
  muted: 'text-gray-400',
  danger: 'text-red-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  default: 'text-black',
};

const weightMap: Record<NonNullable<TypographyProps['weight']>, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const alignMap: Record<NonNullable<TypographyProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const Typography: React.FC<TypographyProps> = ({
  as = 'p',
  children,
  className,
  color = 'default',
  weight,
  align,
  ...props
}) => {
  const Component = as;

  const classes = clsx(
    variantMap[as],
    color && colorMap[color],
    weight && weightMap[weight],
    align && alignMap[align],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
