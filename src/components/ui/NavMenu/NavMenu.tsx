import React, { forwardRef } from 'react';
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Trigger,
  Viewport,
} from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import styles from './NavMenu.module.scss';

export const NavMenu = () => {
  return (
    <Root className={styles.root}>
      <List className={styles.navList}>
        <Item className={styles.item}>
          <Link className={styles.link} href='/'>
            ГЛАВНАЯ
          </Link>
        </Item>

        <Item className={styles.item}>
          <Trigger className={styles.trigger}>
            СТАВКА
          </Trigger>
          <Content className={styles.content}>
            <ul className='List one'>
              <ListItem href='https://stitches.dev/' title='Stitches'>
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href='/colors' title='Colors'>
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href='https://icons.radix-ui.com/' title='Icons'>
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </Content>
        </Item>

        {/* <Item>
          <Trigger className='NavigationMenuTrigger'>
            Overview
          </Trigger>
          <Content className='NavigationMenuContent'>
            <ul className='List two'>
              <ListItem title='Introduction' href='/primitives/docs/overview/introduction'>
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title='Getting started' href='/primitives/docs/overview/getting-started'>
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title='Styling' href='/primitives/docs/guides/styling'>
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title='Animation' href='/primitives/docs/guides/animation'>
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title='Accessibility' href='/primitives/docs/overview/accessibility'>
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title='Releases' href='/primitives/docs/overview/releases'>
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </Content>
        </Item> */}

        {/* <Item>
          <Link className='NavigationMenuLink' href='https://github.com/radix-ui'>
            Github
          </Link>
        </Item> */}

        <Indicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </Indicator>
      </List>

      <div className='ViewportPosition'>
        <Viewport className='NavigationMenuViewport' />
      </div>
    </Root>
  );
};

const ListItem = forwardRef(({ className, children, title, ...props }: any, forwardedRef) => (
  <li>
    <Link asChild>
      <a className={clsx('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className='ListItemHeading'>{title}</div>
        <p className='ListItemText'>{children}</p>
      </a>
    </Link>
  </li>
));
