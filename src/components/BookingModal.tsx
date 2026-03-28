import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

const DEFAULT_URL = "https://cal.com/first-choicecyber/customer-growth-audit";

interface BookingModalProps {
  children: ReactNode;
  url?: string;
  title?: string;
}

const BookingModal = ({ children, url = DEFAULT_URL, title = "Book a Session" }: BookingModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[80vh] p-0 overflow-hidden">
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={title}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
