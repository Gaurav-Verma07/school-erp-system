import { AppShell, Navbar, Header } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Assignments from '../Assignments/Assignments';
import Attandence from '../Attandence/Attandence';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import MainHeader from '../MainHeader/MainHeader';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import Profile from '../Profile/Profile';

const Home = () => {
  return (
    <AppShell
      // padding="md"
      navbar={<HomeNavbar />}
      header={<MainHeader />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<NoticeBoard />} />
        <Route path="attendence" element={<Attandence />} />
        <Route path="assignments" element={<Assignments />} />
      </Routes>
    </AppShell>
  );
};
export default Home;
