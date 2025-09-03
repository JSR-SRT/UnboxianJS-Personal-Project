import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProfileUpdate } from "./ProfileUpdate";
import { ProfileDelete } from "./ProfileDelete";

export const ProfilePrivacy = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">PRIVACY</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="update">
          <AccordionTrigger>Update Profile</AccordionTrigger>
          <AccordionContent>
            <ProfileUpdate />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="delete">
          <AccordionTrigger>Delete Profile</AccordionTrigger>
          <AccordionContent>
            <ProfileDelete />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};



