import PropTypes from 'prop-types';
import { theme } from 'theme';
import { Box } from '../Box';
import {FriendListItem} from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as={theme.as.ul}
      display={theme.display.f}
      flexDirection='column'
      gridGap={theme.space[2]} 
      width={theme.space[11]}
      bg={theme.colors.bgSection}
      my={theme.space[5]}
      mx={theme.position.a}
      p={theme.space[5]}
    >
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
