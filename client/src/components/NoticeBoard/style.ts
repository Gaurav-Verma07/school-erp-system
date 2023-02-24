import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    box: {
      transition: "all .3s",
      color:
        theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.teal,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff",
      boxShadow: theme.shadows.sm,
      borderRadius: theme.radius.md,
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
  };
});

export default useStyles;