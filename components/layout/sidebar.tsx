import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = ({}) => {
  return (
    <Card className="w-64 border-primary">
      <CardContent className="p-3 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="text-lg border data-[state=open]:border-primary rounded-md py-2 px-3 hover:no-underline">
                Events
              </AccordionTrigger>
              <AccordionContent className="border-none">
                <div className="mt-2 gap-2 flex flex-col items-end justify-end">
                  <Link href="/event_requests">
                    <Button className="w-36 flex justify-start" variant="ghost">
                      New Requests
                    </Button>
                  </Link>
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Estimate
                  </Button>
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Events
                  </Button>
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Partial Requests
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <span className="px-3 text-lg">Positions</span>
          <span className="px-3 text-lg">Contractors</span>
          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="text-lg border data-[state=open]:border-primary rounded-md py-2 px-3 hover:no-underline">
                Users
              </AccordionTrigger>
              <AccordionContent className="border-none">
                <div className="mt-2 gap-2 flex flex-col items-end justify-end">
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Admins
                  </Button>
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Clients
                  </Button>
                  <Button
                    className="w-36 flex justify-start"
                    disabled
                    variant="ghost"
                  >
                    Coordinators
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <span className="px-3 text-lg">Profile</span>
        </div>
        <Button className="w-full">
            Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
