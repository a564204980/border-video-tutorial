"use client";

import React from "react";
import { useOrganizationList } from "@clerk/nextjs";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: true, // 默认使用所有属性
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => {
        return <p key={mem.organization.id}>{mem.organization.name}</p>;
      })}
    </ul>
  );
};

export default List;
