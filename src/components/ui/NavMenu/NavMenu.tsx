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
          <Trigger className={styles.trigger}>СТАВКА</Trigger>
          <Content className={styles.content}>
            <ul className={styles.list}>
              <ListItem href='https://stitches.dev/' title='Stitches'>
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
            </ul>
          </Content>
        </Item>

        <Item className={styles.item}>
          <Link className={styles.link} href='/'>
            НАШИ ПАРТНЕРЫ
          </Link>
        </Item>

        <Item className={styles.item}>
          <Link className={styles.link} href='/'>
            API
          </Link>
        </Item>

        <Item className={styles.item}>
          <Trigger className={styles.trigger}>ИНТЕГРАЦИЯ</Trigger>
          <Content className={styles.content}>
            <ul className='List one'>
              <ListItem href='https://stitches.dev/' title='Stitches'>
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
            </ul>
          </Content>
        </Item>

        <Item className={styles.item}>
          <Trigger className={styles.trigger}>О НАС</Trigger>
          <Content className={styles.content} asChild>
            <ul className={styles.list}>
              <ListItem href='/'>
                НАША КОМАНДА
              </ListItem>
              <ListItem href='/'>
                ЖИЗНЬ ПРОЕКТА
              </ListItem>
              <ListItem href='/'>
                НАША КОМАНДА
              </ListItem>
              <ListItem href='/'>
                НАША КОМАНДА
              </ListItem>
            </ul>
          </Content>
        </Item>

        <Indicator className={styles.indicator}>
          <div className={styles.arrow} />
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
