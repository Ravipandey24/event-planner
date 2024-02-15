import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DataTable, PositionDataTable } from "./event-table";
import { DatePickerWithRange } from "./date-picker";


const EventSection = ({}) => {
  return (
    <Card className="w-full border-primary">
      <CardContent className="flex flex-col gap-4 px-6 py-4">
        <span className="flex items-end gap-2 text-3xl">
          Event Name<p className="text-lg">(Venue Details)</p>
        </span>
        <Tabs defaultValue="assign_coordinator">
          <TabsList className="h-12 bg-background border border-primary p-0">
            <TabsTrigger
              className="h-12 p-2 data-[state=active]:bg-primary"
              value="event_details"
            >
              Event Details
            </TabsTrigger>
            <TabsTrigger
              className="h-12 data-[state=active]:bg-primary"
              value="assign_coordinator"
            >
              Assign Coordinator/Coordinator
            </TabsTrigger>
            <TabsTrigger
              className="h-12 data-[state=active]:bg-primary"
              value="session_management"
            >
              Session Management
            </TabsTrigger>
            <TabsTrigger
              className="t h-12 data-[state=active]:bg-primary"
              value="generate_sow"
            >
              Generate SOW
            </TabsTrigger>
          </TabsList>
          <TabsContent value="event_details">None</TabsContent>
          <TabsContent value="assign_coordinator">
            <CoordinatorSection></CoordinatorSection>
          </TabsContent>
          <TabsContent value="session_management">None</TabsContent>
          <TabsContent value="generate_sow">None</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const CoordinatorSection = ({}) => {
  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <span className="text-lg ml-1">Assign Coordinator</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2 h-10 flex p-3 justify-between"
              >
                <span>Search Coordinator</span>
                <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="flex ml-1 gap-2">
            <p className="text-lg">Assign Coordinator</p>
            <p>(Venue Here)</p>{" "}
          </span>
          <DatePickerWithRange className="w-full" startDate={new Date(2023, 12, 12)} endDate={new Date(2023, 12, 15)}></DatePickerWithRange>
        </div>
      </div>
      <div className="mt-4 h-[38rem]">
        <Tabs
          className="mt-2 flex items-end gap-4"
          defaultValue="meeting_room_1"
        >
          <div>
          <p className="text-lg mb-2">Assign Contractor</p>
            <TabsList className="h-[34rem] w-72 flex flex-col justify-between gap-2 bg-background border border-primary p-4">
              <TabsTrigger
                className="h-full w-full flex gap-1 flex-col items-start border border-primary p-2 data-[state=active]:bg-primary"
                value="meeting_room_1"
              >
                <span className="font-semibold">Meeting Room 1</span>
                <p>Start from 12 Jan - Ends at 15 Jan</p>
              </TabsTrigger>
              <TabsTrigger
                className="h-full w-full flex gap-1 flex-col items-start border border-primary p-2 data-[state=active]:bg-primary"
                value="meeting_room_2"
              >
                <span className="font-semibold">Meeting Room 2</span>
                <p>Start from 12 Jan - Ends at 15 Jan</p>
              </TabsTrigger>
              <TabsTrigger
                className="h-full w-full flex gap-1 flex-col items-start border border-primary p-2 data-[state=active]:bg-primary"
                value="meeting_room_3"
              >
                <span className="font-semibold">Meeting Room 3</span>
                <p>Start from 12 Jan - Ends at 15 Jan</p>
              </TabsTrigger>
              <TabsTrigger
                className="h-full w-full flex gap-1 flex-col items-start border border-primary p-2 data-[state=active]:bg-primary"
                value="meeting_room_4"
              >
                <span className="font-semibold">Meeting Room 4</span>
                <p>Start from 12 Jan - Ends at 15 Jan</p>
              </TabsTrigger>
              <TabsTrigger
                className="h-full w-full flex gap-1 flex-col items-start border border-primary p-2 data-[state=active]:bg-primary"
                value="meeting_room_5"
              >
                <span className="font-semibold">Meeting Room 5</span>
                <p>Start from 12 Jan - Ends at 15 Jan</p>
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="w-full">
            <TabsContent value="meeting_room_1">
              <PositionDataTable />
            </TabsContent>
            <TabsContent value="meeting_room_2">nigga</TabsContent>
            <TabsContent value="meeting_room_3">None</TabsContent>
            <TabsContent value="meeting_room_4">None</TabsContent>
            <TabsContent value="meeting_room_5">None</TabsContent>
          </div>
        </Tabs>
      </div>
      <div className="w-full flex justify-center">
        <Button className="h-12 w-52 drop-shadow-xl">
            Save Edits
        </Button>
      </div>
    </>
  );
};

export default EventSection;
