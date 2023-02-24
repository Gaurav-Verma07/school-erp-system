import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconLogout,
} from "@tabler/icons";
import { UserButton } from "../Navbar/UserButton";
import { LinksGroup } from "../Navbar/NavbarLinksGroup";
import useStyles from "./NavbarStyle";

const mockdata = [
  { label: "Dashboard", icon: IconGauge, link: "/" },
  {
    label: "Attendence",
    icon: IconPresentationAnalytics,
    links: [
      { label: "View", link: "/attendence/view" },
      { label: "Add", link: "/attendence/add" },
    ],
  },
  {
    label: "Students",
    icon: IconCalendarStats,
    links: [
      { label: "View", link: "/" },
      { label: "Add", link: "/" },
    ],
  },
  {
    label: "Settings",
    icon: IconAdjustments,
    links: [
      { label: "View Profile", link: "/" },
      { label: "Edit Profile", link: "/" },
    ],
  },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

export function NavbarNested() {
  const { classes, cx } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={750} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
