import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Status = () => {
    const { githubState } = useGithub();

    return (
        <S.WrapperStatus>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatus>
    );
};

export default Status;