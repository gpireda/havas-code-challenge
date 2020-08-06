import React, { FC } from 'react'

interface ParagraphProps {
  dataTestId?: string
}

const Paragraph: FC<ParagraphProps> = ({ children, dataTestId }) => (
  <p data-testid={dataTestId}>{children}</p>
)

export default Paragraph
