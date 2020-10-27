import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

import { StyledSection } from "./styles";

const InstaStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }
  }
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
        <span className="highlight">
          <a
            href="https://instagram.com/drawwithkristi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ strokeWidth: 15 }} />
            @drawwithkristi{" "}
          </a>
        </span>
      </h3>
      {!gramz.length && <p>Retrieving feed from the Gram...</p>}
      {gramz.length ? <h4>Posts</h4> : null}
      <StyledSection>
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
      </StyledSection>
    </div>
  );
}
