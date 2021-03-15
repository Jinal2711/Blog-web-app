import React, { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Label, Button,Modal } from "@windmill/react-ui";
import AddCategory from "../components/CategoryComponent/AddCategory";
import ShowCategory from "../components/CategoryComponent/ShowCategory";

function Categories() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)

  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-6">
      <PageTitle>Categories</PageTitle>
      
        <div className="mt-6">
          <Button size="large" onClick={() =>setIsCategoryModalOpen(true)}>Add Category</Button>
        </div>
        </div>

        <Modal isOpen={isCategoryModalOpen} onClose={() =>setIsCategoryModalOpen(false)}>
          <AddCategory/>
        </Modal>
        <ShowCategory/>
      
    </>
  );
}

export default Categories;
