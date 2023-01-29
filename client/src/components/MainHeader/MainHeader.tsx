import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import DarkThemeToggle from '../DarkThemeToggle/DarkThemeToggle';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    // display: 'block',
    // lineHeight: 1,
    // padding: '8px 12px',
    // borderRadius: theme.radius.sm,
    // textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

const MainHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  //   const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={cx(classes.link, { [classes.linkActive]: active === link.link })}
  //       onClick={(event) => {
  //         event.preventDefault();
  //         setActive(link.link);
  //       }}
  //     >
  //       {link.label}
  //     </a>
  //   ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={'xl'} className={classes.links}>
          <NavLink to="profile">
            <Avatar
              src="https://images.unsplash.com/photo-1603772655616-711c548d85f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="it's me"
              radius="xl"
            />
          </NavLink>
          <DarkThemeToggle />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
};
export default MainHeader;
