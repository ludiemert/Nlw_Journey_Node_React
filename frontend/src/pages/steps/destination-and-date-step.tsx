import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void //function que nao tem parametro
  openGestsInput: () => void
}

export function DestinationAndDateStep({
  closeGuestsInput,
  openGestsInput,
  isGuestsInputOpen,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="When??⏳" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (

        <Button onClick={closeGuestsInput} variant="secondary">
          Alter Local/Date
          <Settings2 className="size-5" />
        </Button>

      ) : (

        <Button onClick={openGestsInput} variant="primary">
          Continue
          < ArrowRight className=" size-5" />
        </Button>


      )}
    </div>
  )
}