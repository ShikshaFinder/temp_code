type Props = {
  className?: string;
  label?: string;
};

const Divider = ({ className, label }: Props) => {
  return (
    <div className={className}>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">{label}</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </div>
  );
};

export default Divider;
