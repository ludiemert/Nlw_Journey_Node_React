import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
    }

    function closeDatePicker() {
      return setIsDatePickerOpen(false)
      }



  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span
          className="text-lg text-zinc-400 w-40"
        >
          When??⏳
        </span>
      </button>

     {isDatePickerOpen && (
       <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
       <div className="w-[320px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
         <div className="space-x-2">
           <div className=" flex items-center justify-between">
             <h2 className="text-lg font-semibold">Select date</h2>
             <button type="button" onClick={closeDatePicker}>
               <X className="size-5 text-zinc-400" />
             </button>
           </div>
         </div>
 
         <DayPicker mode="range" /> 
       </div>
     </div>
     )}


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