import React from 'react';
import LayoutWithSideBar from 'src/components/common/layout/LayoutWithSideBar';
import AddOrLoadProject from 'src/components/home/projects/AddOrLoadProject';
import Protected from 'src/hoc/protected';

const Home = React.memo(() => {
  return (
    <Protected>
      <LayoutWithSideBar>
        <AddOrLoadProject />
      </LayoutWithSideBar>
    </Protected>
  );
});

export default Home;
