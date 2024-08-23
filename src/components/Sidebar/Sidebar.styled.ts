import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white.base};
  border-radius: 0 1rem 1rem;
  position: relative;

  &:before {
    background: ${(props) => props.theme.colors.secondary.base};
    content: "";
    height: 100%;
    padding: 0rem 2rem;
    position: absolute;
    width: 4rem;
    z-index: ${(props) => props.theme.zIndex.default};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 25rem;
  }

  .sidebar {
    border: none;

    .ps-menu-button:hover {
      background-color: transparent;
    }
  }

  .ps-menu-button {
    gap: 3rem;
  }

  .ps-sidebar-container {
    background-color: ${(props) => props.theme.colors.white.base};

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
      background-color: transparent;
    }
  }

  .ps-menu-icon {
    color: ${(props) => props.theme.colors.secondary.base};

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
      color: ${(props) => props.theme.colors.white.base};
    }

    svg {
      width: 2.5rem;
    }
  }

  .ps-menu-button {
    align-items: center;
    color: ${(props) => props.theme.colors.gray.alternate};
    cursor: pointer;
    display: flex;
    font-size: 1.4rem;
    padding: 0.5rem 0;
    text-decoration: none;
    z-index: ${(props) => props.theme.zIndex.default};
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  max-width: 15rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
