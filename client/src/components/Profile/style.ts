import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
  tabs: {
    width: "45%",
    marginLeft: 60,
  },
  tableRow: {
    borderBottom: "none !important",
  },
}));

export default useStyles;