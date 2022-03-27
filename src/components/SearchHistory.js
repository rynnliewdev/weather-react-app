import React, { Fragment } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import HELPER from "../helper";

const SearchHistory = (props) => {

  const historyElements = props.histories.map((history, index) => (
    <Fragment key={index}>
      <ListItem sx={{ display: "flex", justifyContent: "space-between", px: 0 }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Typography sx={{ mr: 1 }}>{index + 1}.</Typography>
          <ListItemText
            primary={`${history.name}, ${history.sys.country}`}
            secondary={
              <Typography color="text.secondary" sx={{ fontSize: 14, display: { md: "none" } }}>
                {HELPER.convertUnixToDateTime(history.dt)}
              </Typography>
            }
            sx={{ m: 0 }}
          ></ListItemText>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemText sx={{ mr: 2, display: { xs: "none", md: "block" } }}
            secondary={HELPER.convertUnixToDateTime(history.dt)}
         ></ListItemText>
          <IconButton sx={{ p: 1 }}
            onClick={(e) => props.searchWeather(e, {city: history.name, country:history.sys.country})}
          >
            <SearchIcon />
          </IconButton>
          <IconButton onClick={(e) => props.deleteWeather(e, index)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </Fragment>
  ));

  return (
    <div>
      <List sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 20 }} gutterBottom> Search History</Typography>
        {props.histories.length > 0 ? historyElements : ""}
      </List>
    </div>
  );
}

export default SearchHistory;
