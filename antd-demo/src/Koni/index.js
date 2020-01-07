import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Koni } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { KoniContextMenu } from '../components/EditorContextMenu';
// 左边菜单栏 分布三个流程拖拽图形
import { KoniItemPanel } from '../components/EditorItemPanel';

import { KoniDetailPanel } from '../components/EditorDetailPanel';
import KoniCustomNode from './shape/nodes/KoniCustomNode';
import  './index.less';

const KoniPage = () => {
  return (
    <GGEditor className='editor'>
      <Row type="flex" className='editorBd'>
        <Col span={4} className='editorSidebar'>
          <KoniItemPanel />
        </Col>
        <Col span={16} className='editorContent'>
          <Koni className='koni' />
        </Col>
        <Col span={4} className='editorSidebar'>
          <KoniDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <KoniCustomNode />
      <KoniContextMenu />
    </GGEditor>
  );
};

export default KoniPage;
