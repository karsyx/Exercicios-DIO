import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();
  
  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Search by username..."
          onChange={(event) => setUsernameForSearch(event.target.value)
          }
          onKeyPress={event => {
            if (event.key === 'Enter') {
              submitGetUser()
            }
          }}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Search</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
