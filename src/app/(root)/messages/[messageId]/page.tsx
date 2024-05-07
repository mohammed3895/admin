"use client";
import { Activity, FolderClosed, ListChecks, Settings } from "lucide-react";
import React, { useState } from "react";
import MessagePreview from "~/components/messages/MessagePreview";
import ActivityTab from "~/components/projects/tabs/ActivityTab";
import FilesTab from "~/components/projects/tabs/FilesTab";
import SettingsTab from "~/components/projects/tabs/SettingsTab";
import TasksTab from "~/components/projects/tabs/TasksTab";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { CONVERSATIONS } from "~/constants/conversations";
import { PROJECTS } from "~/constants/projects";
import { cn } from "~/lib/utils";
interface ParamsProp {
  params: {
    messageId: string;
  };
}

const MessageDetailsPage = ({ params }: ParamsProp) => {
  const message = CONVERSATIONS.find((el) => {
    return el.id === params.messageId;
  });

  return (
    <div className="relative flex h-full w-full flex-1 rounded-lg py-4">
      <MessagePreview message={message!} />
    </div>
  );
};

export default MessageDetailsPage;
