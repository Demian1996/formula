import { Editor } from './';

export const createEditor = (): Editor => {
  const editor: Editor = {
    children: [],

    onChange: () => {},
  };

  return editor;
};
