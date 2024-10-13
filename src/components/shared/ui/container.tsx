import { cn } from '@/lib/utils';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = (props) => {
  const { className, children } = props;

  return <div className={cn('container', className)}>{children}</div>;
};

export default Container;
