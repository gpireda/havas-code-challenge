import React, { FC } from 'react'
import './ListWrapper.module.scss'

const ListWrapper: FC = ({ children }) => (
  <section data-testid='posts-list-wrapper'>{children}</section>
)

export default ListWrapper
