import styled from "styled-components";

export const ResponsiveMenu = styled.div`
  cursor: pointer;
  display: flex;
  width: 3rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white.base};
  border-bottom: 0.1rem solid #e0e0e0;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    min-height: 8rem;
    padding: 2rem;
  }
`;

export const DashboardLogo = styled.div`
  max-width: 12.4rem;
`;

export const UserProfile = styled.div`
  align-items: center;
  display: flex;

  img {
    border-radius: 50%;
    height: 3rem;
    margin-right: 1rem;
    width: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    img {
      width: 3.8rem;
      height: 3.8rem;
    }
  }
`;
