import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

import { StyledProductSection } from "./styles";

const StyledInstaTitle = styled.span`
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  a {
    color: #ff74ab;
  }
`;

const StyledIcon = styled.a`
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px;
`;

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/.netlify/functions/instagram`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, []);
  return posts;
}

export default function Instagram() {
  const gramz = useInstagram();
  return (
    <div>
      <h3>
        <StyledInstaTitle>
          <StyledIcon
            href="https://instagram.com/drawwithkristi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              style={{
                color: "black",
                height: "100%",
                alignSelf: "center",
                strokeWidth: 15,
                padding: "0 5px"
              }}
            />
            @drawwithkristi{" "}
          </StyledIcon>
        </StyledInstaTitle>
        {!gramz.length && <p>Retrieving feed from the Gram...</p>}
        {gramz.length ? <h4>Posts</h4> : null}
      </h3>

      <StyledProductSection>
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <img
              src={`https://images.weserv.nl/?url=${encodeURIComponent(
                gram.thumbnail
              )}&w=230`}
              alt={gram.caption}
            />
          </a>
        ))}
      </StyledProductSection>
    </div>
  );
}
