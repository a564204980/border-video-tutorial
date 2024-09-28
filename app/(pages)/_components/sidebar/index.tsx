"use client";

import React, { useState, useEffect } from "react";

interface SidebarProps {
  siderWidth: number;
  setSiderWidth: (width: number) => void;
}

const Sidebar = ({ siderWidth, setSiderWidth }: SidebarProps) => {
  const [startPageX, setStartPageX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const minSidebarWidth = 60; // 最小宽度

  // 鼠标按下
  const handleMouseDown = (event: React.MouseEvent) => {
    setStartPageX(event.pageX);
    setDragging(true);
  };

  // 全局鼠标移动事件
  const handleMouseMove = (event: MouseEvent) => {
    if (dragging) {
      const newSiderWidth = Math.max(
        minSidebarWidth,
        siderWidth + (event.pageX - startPageX)
      );
      setSiderWidth(newSiderWidth); // 更新传递给父组件的宽度
      setStartPageX(event.pageX);
    }
  };

  // 全局鼠标抬起事件
  const handleMouseUp = () => {
    setDragging(false);
    localStorage.setItem("siderWidth", String(siderWidth));
  };

  // 添加全局事件监听
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    // 清理副作用
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, siderWidth, startPageX]);

  return (
    <aside
      className="fixed z-[1] left-0 bg-blue-950 h-full flex p-3 flex-col gap-y-4 text-white"
      style={{ width: `${siderWidth}px` }}>
      <div>Sidebar</div>
      <div
        className="absolute right-0 h-full w-[4px] bg-red-900 cursor-ew-resize"
        onMouseDown={handleMouseDown}>
        123
      </div>
    </aside>
  );
};

export default Sidebar;
