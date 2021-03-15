import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Avatar,
    Button,
    Pagination,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../../icons";
import { fetchArticleList } from "../../Store/Article";

function ShowArticles() {
    const articles = useSelector((state) => state.ArticleReducer.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticleList());
    }, []);

    return (
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        <TableCell>Title</TableCell>
                        <TableCell>Slug</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell>Created date</TableCell>
                        <TableCell>Updated date</TableCell>
                        <TableCell>Edit/Delete</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {articles?.map((article, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <span>{article.title}</span>
                            </TableCell>
                            <TableCell>
                                <span>{article.slug}</span>
                            </TableCell>
                            <TableCell>
                                <span>{article.content}</span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">
                                    {new Date(article.createdAt).toLocaleDateString()}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">
                                    {new Date(article.updatedAt).toLocaleDateString()}
                                </span>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-4">
                                    <Button layout="link" size="icon" aria-label="Edit">
                                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>
                                    <Button layout="link" size="icon" aria-label="Delete">
                                        <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ShowArticles;
