import React from 'react'
import Container from './NestedComponents/Container'

export default function Main({ children }) {
  return (
    <main className="pb-5">
      <Container >
        {children}
      </Container>
    </main>
  )
}
