import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { CircleFadingPlus, Clipboard, Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";

export const AddTaskShcema = z.object({
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  assignTo: z.string().optional(),
});

const AddTask = () => {
  const form = useForm<z.infer<typeof AddTaskShcema>>({
    resolver: zodResolver(AddTaskShcema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center justify-start gap-2 text-nowrap rounded-md p-2.5 text-xs font-normal uppercase transition-all ease-in-out hover:bg-accent hover:opacity-95 dark:text-white">
          <Plus size={20} strokeWidth={1.35} className="h-5 w-5" />
          New Task
        </div>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form className="flex flex-col items-start gap-3 pt-4">
            <h1 className="mb-4 flex items-center justify-start gap-3 text-xl font-normal tracking-tight text-black-1 dark:text-gray-50">
              New Task
              <CircleFadingPlus className="h-6 w-6" />
            </h1>
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
                        placeholder="Task Title"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <Clipboard className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                        placeholder="Task Description"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                      <Clipboard className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                        placeholder="Task Title"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                        placeholder="Task Title"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                        placeholder="Task Title"
                        {...field}
                        className="relative rounded-md border px-3 text-sm font-light text-muted-foreground"
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
