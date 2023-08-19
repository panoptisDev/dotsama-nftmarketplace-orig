import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger className="w-full md:w-[300px] xl:w-[300px] 2xl:w-[500px] max-w-xl shadow-xl">
        <Command className="dark:bg-neutral-900 max-w-xl">
          <CommandInput placeholder="Search" />
        </Command>
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-900">
        <Command className="dark:bg-neutral-900">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList className=" z-10">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Bored Ape Yacht Club</CommandItem>
              <CommandItem>Milady</CommandItem>
              <CommandItem>Moonbirds</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
    // <Command className="dark:bg-neutral-900 max-w-xl h-10">
    //   <CommandInput placeholder="Type a command or search..." />
    //   <CommandList className=" z-10">
    //     <CommandEmpty>No results found.</CommandEmpty>
    //     <CommandGroup heading="Suggestions">
    //       <CommandItem>Bored Ape Yacht Club</CommandItem>
    //       <CommandItem>Milady</CommandItem>
    //       <CommandItem>Moonbirds</CommandItem>
    //     </CommandGroup>
    //     <CommandSeparator />
    //     <CommandGroup heading="Settings">
    //       <CommandItem>Profile</CommandItem>
    //       <CommandItem>Settings</CommandItem>
    //     </CommandGroup>
    //   </CommandList>
    // </Command>
  );
}
