import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "line-through",
  },
  container: {
    listStyleType: "none !important",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListComponent = ({
  item,
  handleDelete,
  handleAddSubItem,
  handleDeleteSubItem,
  index,
}) => {
  const classes = useStyles();
  return (
    <>
      {item.subitems != null ? (
        <div key={item.id}>
          <ListItem key={item.id}>
            <ListItemIcon onClick={() => handleDelete(item)}>
              <Checkbox
                edge="start"
                checked={item?.completed}
                tabIndex={-1}
                disableRipple
                data-test="transaction-create-submit-payment"
              />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
            />
            <AddCircleIcon
              onClick={() => handleAddSubItem(item, index)} />
          </ListItem>
          <List component="div" disablePadding>
            {item.subitems.map((sitem, sindex) => {
              return (
                <ListItem key={sitem.id} className={classes.nested}>
                  <ListItemIcon
                    onClick={() => handleDeleteSubItem(item, sindex, index)}
                  >
                    <Checkbox
                      edge="start"
                      checked={sitem?.completed}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText key={sitem.id} primary={sitem.name} />
                </ListItem>
              );
            })}
          </List>
        </div>
      ) : (
        <ListItem
          key={item?.id}
          role={undefined}
          dense
          classes={{ container: classes.container }}
        >
          <ListItemIcon onClick={() => handleDelete(item)}>
            <Checkbox
              edge="start"
              checked={item?.completed}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            onClick={() => handleAddSubItem(item, index)}
            primary={item?.title}
            classes={{ primary: item?.completed ? classes.root : null }}
          />
        </ListItem>
      )}
      <Divider />
    </>
  );
};

export default ListComponent;
