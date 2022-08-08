import PropTypes from 'prop-types';
import { theme } from 'theme';
import { Box } from '../Box';

import {
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Box
      as={theme.as.s}
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
          <FriendListItem key={id}>
            <Status status={isOnline} />
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </FriendListItem>
        ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
