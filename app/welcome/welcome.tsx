"use client";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-height: 0;
`;

export function Welcome() {
  return (
    <Container>
      <h1>Welcome</h1>
    </Container>
  );
}
