import React, { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Button, Modal } from "@windmill/react-ui";
import AddArticle from "../components/ArticleComponent/AddArticle";
import ShowArticles from "../components/ArticleComponent/ShowArticles";

function Articles() {
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-6">
        <PageTitle>Articles</PageTitle>

        <div className="mt-6">
          <Button size="large" onClick={() => setIsArticleModalOpen(true)}>
            Add Article
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      >
        <AddArticle />
      </Modal>
      <ShowArticles />
    </>
  );
}

export default Articles;
