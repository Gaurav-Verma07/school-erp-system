import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
  } from '@mantine/core';
  import { IconChevronRight } from '@tabler/icons';
  import useStyles from './ButtonStyle';
  
  interface UserButtonProps extends UnstyledButtonProps {
    image: string;
    name: string;
    email: string;
    icon?: React.ReactNode;
  }
  
  export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
    const { classes } = useStyles();
  
    return (
      <UnstyledButton className={classes.user} {...others}>
        <Group>
          <Avatar src={image} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>
  
            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>
  
          {icon || <IconChevronRight size={14} stroke={1.5} />}
        </Group>
      </UnstyledButton>
    );
  }