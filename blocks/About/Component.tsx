/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Type as Page } from '../../collections/Page';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type About = {
  type: 'page'
  label: string
  page: Page
} | {
  type: 'custom'
  label: string
  url: string
  newTab: boolean
}

export type Type = {
  blockType: 'cta'
  blockName?: string
  content: unknown
  buttons: Button[]
}

export const Component: React.FC<Type> = (props) => {
  const { content, buttons } = props;