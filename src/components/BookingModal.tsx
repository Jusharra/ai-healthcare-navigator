import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

const BOOKING_URL = "https://cal.com/first-choicecyber/healthcare-practice-automation-systems";

interface BookingModalProps {
  children: ReactNode;
}

const BookingModal = ({ children }: BookingModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[80vh] p-0 overflow-hidden">
        <iframe
          src={BOOKING_URL}
          className="w-full h-full border-0"
          title="Book AI Strategy Session"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
