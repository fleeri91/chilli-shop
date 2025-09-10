export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Button size classes using Tailwind
  const sizeClasses = {
    small: 'px-4 py-2 text-xs', // padding and font size for small
    medium: 'px-5 py-3 text-sm', // padding and font size for medium
    large: 'px-6 py-4 text-base', // padding and font size for large
  };

  // Button mode classes based on primary/secondary
  const modeClasses = primary
    ? 'bg-indigo-600 text-white' // Primary button
    : 'bg-transparent text-gray-800 border border-gray-300 shadow-sm'; // Secondary button

  return (
    <button
      type='button'
      className={`inline-block cursor-pointer border-0 rounded-full font-semibold ${sizeClasses[size]} ${modeClasses}`}
      style={{ backgroundColor }} // For custom background color
      {...props}
    >
      {label}
    </button>
  );
};
