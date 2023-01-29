import { useState } from 'react';
import { createStyles, Navbar, Group, Code } from '@mantine/core';
import {
  IconSettings,
  IconDatabaseImport,
  IconUserCheck,
  IconNotebook,
  IconSwitchHorizontal,
  IconLogout,
  IconCalendarStats,
  IconReceipt,
  IconIdBadge2,
  IconHome2,
  IconUserPlus,
} from '@tabler/icons';
import { NavLink } from 'react-router-dom';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});

const data = [
  { link: 'home', label: 'Home', icon: IconHome2 },
  { link: 'attendence', label: 'Attendence', icon: IconUserCheck },
  { link: 'schedule', label: 'Schedule', icon: IconCalendarStats },
  { link: 'fees', label: 'Fee Submission', icon: IconReceipt },
  { link: 'admissions', label: 'Admissions', icon: IconUserPlus },
  { link: 'admitCards', label: 'Admit Cards', icon: IconIdBadge2 },
  { link: 'assignments', label: 'Assignments', icon: IconNotebook },
  { link: 'settings', label: 'Settings', icon: IconSettings },
];

const HomeNavbar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => {
    console.log(item.link);
    return (
      <NavLink
        className={cx(classes.link, { [classes.linkActive]: item.label === active })}
        to={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </NavLink>
    );
  });

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header}>
          {/* <MantineLogo size={28} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
};
export default HomeNavbar;
