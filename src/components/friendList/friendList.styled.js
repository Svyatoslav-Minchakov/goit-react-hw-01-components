import styled from 'styled-components';

export const FriendListWrapper = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    margin: '0 auto',
    gap: 20,
    marginBottom: 100,
  };
});

export const ListItem = styled('li')(() => {
  return {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    gap: 30,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2)',
  };
});

export const Status = styled('span')(({ $isOnline }) => {
  return {
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: $isOnline ? 'green' : 'red',
    display: 'block',
  };
});

export const Image = styled('img')(() => {
  return {
    width: 100,
    height: 100,
  };
});

export const Name = styled('p')(() => {
  return {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 30,
  };
});
