import React, { memo, useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// MUI Components
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

// MUI Icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PostAddIcon from '@material-ui/icons/PostAdd';

// Action Creator
import { requestTeamsEmployees } from '../store/modules/employeeUtils/actionCreators';

const TeamList = memo(({ openReportDialog }) => {
  const dispatch = useDispatch();

  const teamsEmployees = useSelector(state =>
    state.employeeUtils.get('teamsEmployees'),
  );

  const [state, setState] = useState({});

  useEffect(() => {
    dispatch(requestTeamsEmployees());
  }, [dispatch]);

  if (teamsEmployees && teamsEmployees.length > 0) {
    return (
      <Paper className="paper-dashboard">
        <List>
          {teamsEmployees.map(team => (
            <Fragment key={team.id}>
              <ListItem
                button
                onClick={event => {
                  setState(prevState => ({
                    ...prevState,
                    [team.name]: !state[team.name] || false,
                  }));
                }}
              >
                <ListItemIcon>
                  <RecentActorsIcon className="paper-dashboard__item-icon" />
                </ListItemIcon>

                <ListItemText
                  primary={team.name}
                  secondary={
                    team.employees.length > 1 || team.employees.length === 0
                      ? `${team.employees.length} Members`
                      : '1 Member'
                  }
                />
                {state[team.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>

              <Collapse in={state[team.name]} timeout="auto" unmountOnExit>
                <List>
                  {team.employees.map(employee => (
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar className="avatar">
                          <AccountCircleIcon />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={`${employee.name} ${
                          employee.lastName
                        } ${employee.mothersName || ''}`}
                        secondary={employee.position}
                      />

                      <ListItemSecondaryAction>
                        <IconButton
                          onClick={() => openReportDialog(employee.id)}
                        >
                          <PostAddIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  }

  return <Typography variant="h6">You don't have teams yet!</Typography>;
});

TeamList.propTypes = {
  openReportDialog: PropTypes.func.isRequired,
};

export default TeamList;
