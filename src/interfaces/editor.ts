import { isPlainObject } from 'is-plain-object';

const IS_EDITOR_CACHE = new WeakMap<object, boolean>();

export interface Editor {
  // TODO: 拓展
  children: Text[];

  onChange: () => void;
}

export interface EditorInstance {
  // TODO: 待实现
  isEditor: (value: any) => value is Editor;
}

export const Editor: EditorInstance = {
  isEditor(value: any): value is Editor {
    const cachedIsEditor = IS_EDITOR_CACHE.get(value);
    if (cachedIsEditor !== undefined) {
      return cachedIsEditor;
    }

    if (!isPlainObject(value)) {
      return false;
    }

    // TODO: 检查Editor实例方法
    const isEditor = typeof value.onChange === 'function';

    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },
};
