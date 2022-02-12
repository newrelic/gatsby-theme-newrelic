import Link from './Link';

export interface ExternalLinkProps {
  href?: string;
}

const ExternalLink = ({ href, ...props }: ExternalLinkProps): JSX.Element => {
  return <Link to={href} {...props} />;
};

export default ExternalLink;
