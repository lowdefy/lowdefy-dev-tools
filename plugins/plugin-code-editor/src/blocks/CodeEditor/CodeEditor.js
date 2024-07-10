import React, { useEffect, useRef } from 'react';
import { blockDefaultProps } from '@lowdefy/block-utils';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ blockId, properties, methods, value }) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const defaultOptions = {
    tabSize: 2,
    readOnly: false,
    minimap: {
      enabled: false,
    },
    showFoldingControls: 'always',
    ...properties.options,
  };

  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, []);

  const onChange = (newValue) => {
    methods.setValue(newValue);
    methods.triggerEvent({ action: 'onChange' });
  };

  const editorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.setValue(properties.value || value || '');
    editor.getModel().updateOptions(defaultOptions);
  };

  return (
    <div id={blockId}>
      <MonacoEditor
        height={properties.height || 300}
        width={properties.width || '100%'}
        language={properties.language || 'yaml'}
        theme={properties.theme || 'vs-dark'}
        value={properties.value || value || ''}
        onChange={onChange}
        options={defaultOptions}
        editorDidMount={editorDidMount}
      />
    </div>
  );
};

CodeEditor.defaultProps = blockDefaultProps;
CodeEditor.meta = {
  category: 'display',
  icons: [],
  styles: [],
};

export default CodeEditor;
