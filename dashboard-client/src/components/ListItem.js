import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
`;

const prNumStyle = { flex: 1 };
const usernameStyle = { flex: 1 };
const titleStyle = { flex: 3 };

const ListItem = ({ number, username, prTitle: title }) => {
  const prUrl = `https://github.com/freeCodeCamp/freeCodeCamp/pull/${number}`;
  return (
    <Container>
      <a style={prNumStyle} href={prUrl} rel="noopener noreferrer" target="_blank">
        #{number}
      </a>
      <span style={usernameStyle}>{username}</span>
      <span style={titleStyle}>{title}</span>
    </Container>
  );
};

export default ListItem;
