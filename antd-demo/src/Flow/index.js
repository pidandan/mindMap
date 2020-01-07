import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { FlowContextMenu } from '../components/EditorContextMenu';
import { FlowToolbar } from '../components/EditorToolbar';
import { FlowItemPanel } from '../components/EditorItemPanel';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
import './index.less';

const FlowPage = () => {
  return (
    <GGEditor className='editor'  onAfterCommandExecute={({ command }) => {
      console.log('command点击提交按钮会获取到页面放着得信息', command);
    }}>
      <Row type="flex" className='editorHd'>
        <Col span={24}>
          <FlowToolbar />
        </Col>
      </Row>
      <Row type="flex" className='editorBd'>
        <Col span={4} className='editorSidebar'>
          <FlowItemPanel />
        </Col>
        <Col span={16} className='editorContent'>
          <Flow className='flow' />
        </Col>
        <Col span={4} className='editorSidebar'>
          <FlowDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <FlowContextMenu />
    </GGEditor>
  );
};

export default FlowPage;
