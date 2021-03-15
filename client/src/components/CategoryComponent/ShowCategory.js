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
import { fetchCategoryList } from "../../Store/Category";

function ShowCategory() {
  const CategoryList = useSelector((state) => state.CategoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, []);

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Name</TableCell>
            <TableCell>Slug</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Created date</TableCell>
            <TableCell>Updated date</TableCell>
            <TableCell>Edit/Delete</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {CategoryList?.map((category, i) => (
            <TableRow key={i}>
              <TableCell>
                <span>{category.name}</span>
              </TableCell>
              <TableCell>
                <span>{category.slug}</span>
              </TableCell>
              <TableCell>
                <span>{category.description}</span>
              </TableCell>
              <TableCell>
                <span className="text-sm">
                  {new Date(category.createdAt).toLocaleDateString()}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-sm">
                  {new Date(category.updatedAt).toLocaleDateString()}
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

export default ShowCategory;
