import React from "react";
import Layout from "../components/layouts/Layout";
import NestedLayout from "../components/layouts/NestedLayout";

const Dummy = () => {
  return <div>Dummy</div>;
};

Dummy.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Dummy;
