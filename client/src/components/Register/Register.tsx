import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  Anchor,
  Title,
  Button,
  Checkbox,
  Group,
  createStyles,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(https://www.canossaschool.in/images/slide1.jpg)',
    textAlign: 'left',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    height: '100vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const AuthenticationForm = (props: PaperProps) => {
  const { classes } = useStyles();

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const formSubmitHander = () => {
    navigate('/home');
  };

  return (
    <div className={classes.wrapper}>
      <Paper shadow="sm" p="xl" radius={0} {...props} className={classes.form}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Weclcome to SJ Education Center
        </Title>
        <form
          onSubmit={form.onSubmit(() => {
            formSubmitHander();
          })}
        >
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
            />
          </Stack>

          {/* <Group position="apart" mt="xl"> */}
          {/* <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register' ? 'Already have an account? Login' : "Don't have an account? Register"}
          </Anchor> */}
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button mt={10} type="submit">
            Login
          </Button>
          {/* </Group> */}
        </form>
      </Paper>
    </div>
  );
};
export default AuthenticationForm;
