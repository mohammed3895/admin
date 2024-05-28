import { zodResolver } from "@hookform/resolvers/zod";
import {
  Clipboard,
  CloudUpload,
  Mail,
  Phone,
  User,
  UserCheck2,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { AddTaskShcema } from "../AddTask";
import { Button } from "~/components/ui/button";

const SettingsTab = () => {
  const form = useForm<z.infer<typeof AddTaskShcema>>({
    resolver: zodResolver(AddTaskShcema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      assignTo: "",
    },
  });

  return (
    <div className="mb-16 h-full w-full">
      <div className="flex w-full items-center justify-start gap-3 rounded-md bg-background p-4">
        <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-md border">
          <UserCheck2 className="h-5 w-5" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-text text-sm font-normal">Settings</span>
          <span className=" text-xs text-muted-foreground">
            Manage your account
          </span>
        </div>
      </div>

      {/*  */}
      <div className="my-2 flex w-full flex-col items-center justify-center rounded-md border border-dashed p-4">
        <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-md bg-background">
          <CloudUpload strokeWidth={1} className="h-6 w-6" />
        </div>
        <div className="mt-2 flex flex-col items-center justify-center">
          <h2 className="text-sm font-normal capitalize">
            Behance Presentation
          </h2>
          <h2 className="text-xs font-light capitalize text-muted-foreground">
            Created on 07 Jun 2023
          </h2>
        </div>
      </div>

      {/*  */}
      <div className="w-full">
        <Form {...form}>
          <form className="flex flex-col items-start gap-1.5 rounded-lg bg-background p-4 pt-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Project Name"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <Clipboard className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <Mail className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Phone"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <Phone className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assignTo"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Assign to"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <User className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button className="mt-3 w-full">Create Project</Button>
      </div>
    </div>
  );
};

export default SettingsTab;
