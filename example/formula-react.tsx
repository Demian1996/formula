// 先将所有的ui逻辑堆在这里
import React from 'react';
import { Editor } from 'formula';

interface EditableProps {
  editor: Editor;
}

export const Editable = ({ editor }: EditableProps) => {
  console.log(Editor.isEditor(editor));
  return (
    <div>
      <input />
    </div>
  );
};
