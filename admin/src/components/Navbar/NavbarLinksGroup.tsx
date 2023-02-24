import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  TablerIcon,
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons";
import { NavLink } from "react-router-dom";
import useStyles from "./LinkStyle";

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <NavLink to={link.link} className={classes.link} key={link.label}>
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">
              {link ? (
                <NavLink to={link} key={label} className={classes.singleLink}> 
                  {label}
                </NavLink>
              ) : (
                label
              )}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
