import styled from 'styled-components';

export const Item = styled.li`
  display: ${p => p.theme.display.f};
  align-items: ${p => p.theme.position.c};
  background-color: ${p => p.theme.colors.bgCard};
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.card};
`;

export const Status = styled.span`
  width: ${p => p.theme.fontSizes.l};
  height: ${p => p.theme.fontSizes.l};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ theme, status }) => {
      return status ? theme.colors.isOnline : theme.colors.isOffline
   }};
`;

export const Avatar = styled.img`
  width: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.bgCard};
  border-radius: ${p => p.theme.radii.big};
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
