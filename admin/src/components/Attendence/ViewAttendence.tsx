import { createStyles, Table, Progress, Anchor, Text, Group, ScrollArea } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `3px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  },
}));


const data = [
      {
        "title": "Foundation",
        "author": "Isaac Asimov",
        "year": 1951,
        "reviews": {
          "positive": 2223,
          "negative": 259
        }
      },
      {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "year": 1818,
        "reviews": {
          "positive": 5677,
          "negative": 1265
        }
      },
      {
        "title": "Solaris",
        "author": "Stanislaw Lem",
        "year": 1961,
        "reviews": {
          "positive": 3487,
          "negative": 1845
        }
      },
      {
        "title": "Dune",
        "author": "Frank Herbert",
        "year": 1965,
        "reviews": {
          "positive": 8576,
          "negative": 663
        }
      },
      {
        "title": "The Left Hand of Darkness",
        "author": "Ursula K. Le Guin",
        "year": 1969,
        "reviews": {
          "positive": 6631,
          "negative": 993
        }
      },
      {
        "title": "A Scanner Darkly",
        "author": "Philip K Dick",
        "year": 1977,
        "reviews": {
          "positive": 8124,
          "negative": 1847
        }
      }]

export function ViewAttendence() {
  const { classes, theme } = useStyles();

  const rows = data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <tr key={row.title}>
        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.title}
          </Anchor>
        </td>
        <td>{row.year}</td>
        <td>
          <Anchor<'a'> size="sm" onClick={(event) => event.preventDefault()}>
            {row.author}
          </Anchor>
        </td>
        <td>{Intl.NumberFormat().format(totalReviews)}</td>
        <td>
          <Group position="apart">
            <Text size="xs" color="teal" weight={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text size="xs" color="red" weight={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress
            classNames={{ bar: classes.progressBar }}
            sections={[
              {
                value: positiveReviews,
                color: theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[6],
              },
              {
                value: negativeReviews,
                color: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[6],
              },
            ]}
          />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Book title</th>
            <th>Year</th>
            <th>Author</th>
            <th>Reviews</th>
            <th>Reviews distribution</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}