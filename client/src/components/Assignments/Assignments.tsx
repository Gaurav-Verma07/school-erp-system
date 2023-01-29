import { Accordion, ActionIcon, Badge, Box, Button, Checkbox, Grid, Group, Modal, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconSubmarine } from '@tabler/icons';
import dayjs from 'dayjs';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { data } from './AssignmentData';

const PAGE_SIZE = 12;

const Assignments = () => {
  const [page, setPage] = useState(1);

  const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));
  const [pageRecords, setpageRecords] = useState(records);
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');
  const [veteransOnly, setVeteransOnly] = useState(false);
  const [debouncedQuery] = useDebouncedValue(query, 200);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(data.slice(from, to));
  }, [page]);

  useEffect(() => {
    setRecords(
      records.filter(({ name, city, state, streetAddress, isNew }) => {
        if (veteransOnly && isNew) {
          return false;
        }
        if (
          debouncedQuery !== '' &&
          !`${name} ${city} ${state} ${streetAddress}`.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
        ) {
          return false;
        }
        return true;
      }),
    );
  }, [debouncedQuery, veteransOnly]);

  const submitHandler = (id: string) => {};

  return (
    <Box sx={{ height: 607 }}>
      <Grid align="center" mb="md">
        <Grid.Col xs={8} sm={9}>
          <TextInput
            sx={{ flexBasis: '60%' }}
            placeholder="Search Assignments..."
            icon={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col xs={4} sm={3}>
          <Checkbox
            size="md"
            label="Pending"
            checked={veteransOnly}
            onChange={(e) => setVeteransOnly(e.currentTarget.checked)}
          />
        </Grid.Col>
      </Grid>
      <DataTable
        //   rowBorderColor='teal'
        // withBorder
        shadow="sm"
        highlightOnHover
        horizontalSpacing="xs"
        verticalSpacing="xs"
        verticalAlignment="center"
        // withColumnBorders
        records={pageRecords}
        columns={[
          {
            accessor: 'name',
            width: 'auto',
            render: ({ name, isNew }) => (
              <Group>
                {name} {isNew && <Badge color="red">NEW</Badge>}{' '}
              </Group>
            ),
          },
          { accessor: 'streetAddress', width: 'fit-content' },
          { accessor: 'city' },
          {
            accessor: 'state',
            textAlignment: 'right',
          },
          {
            accessor: 'Submit',
            render: ({ id }) => (
              <>
                <Modal
                  centered
                  // overlayColor=""
                  // overlayBlur={1}
                  aria-modal="true"
                  closeButtonLabel="Close authentication modal"
                  overlayOpacity={5}
                  size="lg"
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title="Introduce yourself!"
                ></Modal>
                <Button color="red" radius="xl" compact uppercase onClick={() => setOpened(true)}>
                  Submit
                </Button>
              </>
            ),
          },
        ]}
        totalRecords={data.length}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
        // uncomment the next line to use a custom loading text
        loadingText="Loading..."
        // uncomment the next line to display a custom text when no records were found
        noRecordsText="No records found"
        // uncomment the next line to use a custom pagination text
        // paginationText={({ from, to, totalRecords }) => `Records ${from} - ${to} of ${totalRecords}`}
        // uncomment the next line to use a custom pagination color (see https://mantine.dev/theming/colors/)
        paginationColor="grape"
        // uncomment the next line to use a custom pagination size
        paginationSize="md"
      />
    </Box>
  );
};

export default Assignments;
