import NewRelicLogo from './NewRelicLogo';

interface LogoProps {
  className?: string;
  width?: string;
}

const Logo = ({ className, width }: LogoProps): JSX.Element => (
  <NewRelicLogo className={className} size={width} />
);

export default Logo;
