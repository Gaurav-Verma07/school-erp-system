import { Badge, Box, Container, createStyles, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => {
  return {
    box: {
      transition: 'all .3s',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.teal,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
      boxShadow: theme.shadows.sm,
      borderRadius: theme.radius.md,
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-2px)',
      },
    },
  };
});

const data = [
  { notice: 'Admit Card released for high school', isNew: true },
  { notice: 'Admit Card released for high school', isNew: true },
  {
    notice: "Inter School Craft competition is scheduled to held this saturday. Everyone's presence is expected",
    isNew: true,
  },
  { notice: 'Second class test of Junior class is released', isNew: false },
  { notice: 'Admit Card released for high school', isNew: false },
  { notice: 'Steps to be taken maintaining decorem in school premises', isNew: false },
  { notice: 'Admit Card released for high school', isNew: false },
];

const NoticeBoard = () => {
  const { classes } = useStyles();
  return (
    // <NavLink  to="notification">
    <Container>
      {data.map((item: any) => {
        return (
          <Box
            //   component="a"
            //   width={100}
            key={item.index}
            p={10}
            mb={20}
            className={classes.box}
          >
            <Text align="left" p={5}>
              {item.notice}{' '}
              {item.isNew && (
                <Badge color="red" size="sm" variant="filled">
                  NEW
                </Badge>
              )}
            </Text>
          </Box>
        );
      })}
    </Container>
    // <Box
    //     //   component="a"
    //     //   width={100}
    //     p={10}
    //     sx={(theme) => ({
    //       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    //       boxShadow: theme.shadows.sm,
    //       cursor: 'pointer',
    //       width: 'fit-content',
    //     })}
    //   >
    //     <Text >
    //       Admit Card released for high school{' '}
    //       <Badge color="red" size="sm" variant="filled">
    //         NEW
    //       </Badge>{' '}
    //     </Text>
    //   </Box>
    // </NavLink>
  );
};
export default NoticeBoard;
