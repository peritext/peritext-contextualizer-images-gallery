import React from 'react';

const datasetFileName = 'big.jpeg';
const rawData = require(`../assets_examples/${datasetFileName}`);

import { storiesOf } from '@storybook/react';

import Static from './StaticContextualizationContainer';
import Dynamic from './DynamicContextualizationContainer';

const resource = {
  metadata: {
    title: 'coucou',
  },
  data: {
    images: [
      {
        imageDataset: 'test'
      },
      {
        imageDataset: 'test2'
      },
      {
        imageDataset: 'test'
      },
    ]
 }
};
const datasets = {
  test: {
    method: 'get',
    format: 'gif',
    uri: `/${datasetFileName}`
  },
  test2: {
    method: 'get',
    format: 'gif',
    uri: require(`../assets_examples/users.gif`)
  }
}

const contextualizer = {
  displayCommentsInCodex: true
}

storiesOf('Dynamic block contextualization', module)
  .add('Basic (image uri)', () => (
    <Dynamic
      resource={resource}
      datasets={datasets}
    />
  ))

storiesOf('Static block contextualization', module)
  .add('Basic (image uri)', () => (
    <Static
      resource={resource}
      datasets={datasets}
      contextualizer={contextualizer}
    />
  ))