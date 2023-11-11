import React, { useState, useEffect } from "react";
import axios from "axios";

const useBoardTasks = (board) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/boards/${board.id}/tasks?page=${page}&perPage=${perPage}&search=${search}&sort=${sort}&order=${order}`
        );
        setTasks(response.data.data);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [page, perPage, search, sort, order, board.id]);

  return {
    tasks,
    loading,
    error,
    page,
    setPage,
    perPage,
    setPerPage,
    search,
    setSearch,
    sort,
    setSort,
    order,
    setOrder,
    open,
    setOpen,
    task,
    setTask,
    editTask,
    setEditTask,
    deleteTask,
    setDeleteTask,
    editOpen,
    setEditOpen,
    deleteOpen,
    setDeleteOpen,
    editId,
    setEditId,
    deleteId,
    setDeleteId,
  };
};
