import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

const Modal = ({ content, closeModal, open, resetGame }) => {
  return (
    <Dialog onOpenChange={closeModal} open={open}>
      <DialogContent className="flex flex-col justify-center">
        <DialogTitle className="text-center font-bold text-2xl">
          {content.title}
        </DialogTitle>
        <DialogDescription className="flex justify-center items-center">
          {content.content}
        </DialogDescription>
        <div className="flex justify-center mt-4 gap-4">
          <Button variant="outline" onClick={closeModal}>
            Cancelar
          </Button>
          <Button onClick={resetGame}>Reiniciar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
