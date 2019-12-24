# Stencil Custom Elements JSON

A simple stencil plugin that allows you to generate the custom-elements.json *needed for Storybook docs plugin*

## Install 

```sh
npm i --save @dcylabs/stencil-custom-elements-json
```

## Usage 

```typescript 
import { Config } from '@stencil/core';
import { customElements } from '@dcylabs/stencil-custom-elements-json';

export const config: Config = {
  outputTargets: [
    customElements()
  ]
};
```
