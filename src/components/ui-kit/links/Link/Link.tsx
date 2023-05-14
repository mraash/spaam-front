import { FC, AnchorHTMLAttributes } from 'react';
import css from './Link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text?: string|number,
}

export const Link: FC<LinkProps> = ({ text, ...linkProps }) => {
    linkProps.className = `${linkProps.className} ${css.Link}`;
    linkProps.children = linkProps.children ?? text;

    return <a { ...linkProps }></a>;
};
