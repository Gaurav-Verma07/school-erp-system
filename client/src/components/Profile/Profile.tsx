import { createStyles, Card, Avatar, Text, Group, Button, Tabs, ScrollArea, Table } from '@mantine/core';
import { IconFileReport, IconPhoto, IconSettings, IconUserCircle } from '@tabler/icons';
import { UserData } from './UserData';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
  tabs: {
    width: '45%',
    marginLeft: 60,
  },
  tableRow: {
    borderBottom: 'none !important',
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

const Profile = () => {
  const { classes, theme } = useStyles();

  const items = UserData.stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="md" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${UserData.image})`, height: 200 }} />
      <Avatar src={UserData.avatar} size={200} radius={200} mx="auto" mt={-76} className={classes.avatar} />
      <Text align="center" size="lg" color= "teal" mt="sm" mb="xs">
        Amala Kumari
      </Text>
      <Tabs color="teal" className={classes.tabs} defaultValue="About">
        <Tabs.List>
          <Tabs.Tab pr={40} value="About" icon={<IconUserCircle size={20} />}>
            About
          </Tabs.Tab>
          <Tabs.Tab pr={40} value="Academic" icon={<IconFileReport size={20} />}>
            Academic
          </Tabs.Tab>
          <Tabs.Tab pr={40} value="Settings" icon={<IconSettings size={20} />}>
            Settings
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="About" pt="xs">
          {/* <Text align="left" p="xs">
            Class: VI
          </Text> */}
          <Table verticalSpacing="md" className={classes.tableRow} sx={{ width: 500}}>
            <tbody>
              <tr>
                <td className={classes.tableRow}>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Class</Text>
                    <Text size="md">VI</Text>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Section</Text>
                    <Text size="md">A</Text>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Roll Number</Text>
                    <Text size="md">23</Text>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Email Address:</Text>
                    <Text size="md">sample@gmail.com</Text>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Phone Number:</Text>
                    <Text size="md">1234567890</Text>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Group spacing="sm" position="apart">
                    <Text size="md">Address:</Text>
                    <Text size="md">Sherlock Holmes - 221B Baker St., London.</Text>
                  </Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tabs.Panel>
      </Tabs>
      {/* <Text align="center" size="sm" color="dimmed">
        {UserData.job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group> */}
      {/* <Button fullWidth radius="md" mt= "xl" size="md" color={theme.colorScheme === 'dark' ? undefined : 'dark'}>
        Follow
      </Button> */}
    </Card>
  );
};
export default Profile;
