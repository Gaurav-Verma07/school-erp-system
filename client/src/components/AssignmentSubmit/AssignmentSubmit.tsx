import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

const AssignmentSubmit = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
};
export default AssignmentSubmit;
