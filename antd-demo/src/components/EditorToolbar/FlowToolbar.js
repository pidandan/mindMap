import React from 'react';
import { Toolbar } from 'gg-editor';
import ToolbarButton from './ToolbarButton';
import './index.less';

const FlowToolbar = () => {
  return (
    <Toolbar className='toolbar'>
      {/* <ToolbarButton command="undo" />
      <ToolbarButton command="redo" /> */}
      <ToolbarButton command="copy" text="复制"/>
      <ToolbarButton command="paste" text="粘贴"/>
      <ToolbarButton command="delete" text="删除"/>
      <ToolbarButton command="zoomIn" icon="zoom-in" text="放大" />
      <ToolbarButton command="zoomOut" icon="zoom-out" text="缩小" />
      {/* <ToolbarButton command="autoZoom" icon="fit-map" text="Fit Map" />
      <ToolbarButton command="resetZoom" icon="actual-size" text="Actual Size" /> */}
      {/* <ToolbarButton command="toBack" icon="to-back" text="To Back" />
      <ToolbarButton command="toFront" icon="to-front" text="To Front" /> */}
      {/* <ToolbarButton command="multiSelect" icon="multi-select" text="Multi Select" />
      <ToolbarButton command="addGroup" icon="group" text="Add Group" />
      <ToolbarButton command="unGroup" icon="ungroup" text="Ungroup" /> */}
    </Toolbar>
  );
};

export default FlowToolbar;
