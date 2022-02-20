import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// React Redux
import { useSelector, useDispatch } from "react-redux";
import { selectors } from "../../store/home/reducers";
import { actions } from "../../store/home/actions";

import { makeStyles } from "@material-ui/core/styles";
import InputComponent from "../../components/InputComponent";
import ListComponent from "../../components/ListComponent";
import DialogComponent from "../../components/DialogComponent";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
  },
  toogle: {
    textAlign: "center",
    margin: "20px",
  },
}));

let counter = 100;
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [inputSubItemValue, setInputSubItemValue] = useState(false);

  var DataResult = useSelector(selectors.dataResult);

  const handleDeleteSubItem = (value, sindex, index) => {
    const newMappings = value.subitems.filter(
      (item, idx) => idx !== sindex
    );
    const newMappings1 = DataResult.map((item, i) => {
      if (i !== index) return item;
      return Object.assign({}, item, { subitems: newMappings });
    });
    dispatch(actions.setData(newMappings1));
  };

  const handleDelete = (value) => {
    dispatch(
      actions.setData(DataResult.filter((item) => item.id !== value.id))
    );
  };

  const handleAdd = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      dispatch(
        actions.setData([
          ...DataResult,
          {
            completed: false,
            id: counter,
            title: event.target.value,
            userId: 1,
            subitems: []
          },
        ])
      );
      counter = counter + 1;
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddSubItem = (value, index) => {
    setActiveItem(value);
    setShowDialog(true);
  };

  const handleSubItemDialog = () => {
    const newdata = DataResult.map((list) =>
      list.id === activeItem.id
        ? {
          ...list,
          subitems: [
            ...list.subitems,
            {
              id: list.subitems.length + 1,
              name: inputSubItemValue,
              completed: false
            },
          ],
        }
        : list
    );
    dispatch(actions.setData(newdata));
    setActiveItem("");
    setShowDialog(false);
  }
  const handleCloseDialog = () => {
    setActiveItem("");
    setShowDialog(false);
  };

  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);

  return (
    <Grid className={classes.root}>
      <InputComponent
        inputValue={inputValue}
        handleAdd={handleAdd}
        handleChange={handleChange}
      />
      {DataResult.length > 0 &&
        DataResult.map((item, index) => (
          <ListComponent
            key={item.id}
            index={index}
            item={item}
            handleDelete={handleDelete}
            handleAddSubItem={handleAddSubItem}
            handleDeleteSubItem={handleDeleteSubItem}
          />
        ))}
      {showDialog && (
        <DialogComponent
          showDialog={showDialog}
          handleCloseDialog={handleCloseDialog}
          setInputSubItemValue={setInputSubItemValue}
          handleSubItemDialog={handleSubItemDialog}
        />
      )}
    </Grid>
  );
};

export default Home;
