<<<<<<< HEAD
import { Calendar, CircleCheck, CircleCheckIcon, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, UserCogIcon, X } from "lucide-react";
=======
import { Calendar, CircleCheck, CircleCheckIcon, CircleDashed, Link2,  MapPin, Plus, Settings2, Tag, User, UserCogIcon, X } from "lucide-react";
>>>>>>> 80630ff (add componente next page)
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";



export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }





  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8 ">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">Florianópolis, Brasil</span>
        </div>


        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className=" text-zinc-100">17 a 23 August</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className=" bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alter Local/Date
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Activities</h2>

            <button onClick={openCreateActivityModal} className=" bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              < Plus className=" size-5 text-lime-950" />
              Register Activity
            </button>
          </div>

          <div className="space-y-8">
            <div className=" space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 17</span>
                <span className=" text-xl text-zinc-500">Saturday</span>
              </div>
              <p className="text-zinc-500 text-sm">No activity registered on that date.</p>
            </div>

            <div className=" space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Day 18</span>
                <span className=" text-xl text-zinc-500">Sunday</span>
              </div>


              <div className="-space-y-2.5">
                <div className=" px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Group gym</span>
                  <span className="text-zinc-400 text-sm ml-auto">8:00</span>
                </div>
              </div>

              <div className="-space-y-2.5">
                <div className=" px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Group gym</span>
                  <span className="text-zinc-400 text-sm ml-auto">8:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Important Links</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">AirBnB reservation</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.airbnb.com.br/rooms/1047000111212333333221123322
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Rules of the house</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.notion.com/pages/104700047000111212333333221123322
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>

            </div>
            <button className=" bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <Plus className="size-5" />
              Add New Link
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800" />


          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Guests</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Jessica White</span>
                  <span className="block text-sm text-zinc-400 truncate">
                    jessica.white44@yahoo.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                  <span className="block text-sm text-zinc-400 truncate">
                    lacy.stiedemann@gmail.com
                  </span>
                </div>
                <CircleCheckIcon className="text-zinc-400 size-5 shrink-0" />
              </div>

            </div>
            <button className=" bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
              <UserCogIcon className="size-5" />
              Manage guests
            </button>
          </div>



        </div>
      </main>

      {isCreateActivityModalOpen && (
<<<<<<< HEAD
        <CreateActivityModal
        closeCreateActivityModal={closeCreateActivityModal}
        />
=======
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-x-2">
                <div className=" flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Register activity</h2>
                  <button type="button" onClick={closeCreateActivityModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
      
                <p className=" text-sm text-zinc-400">
                All guests can view the activities.
                   </p>
              </div>
      
              <form className=" space-y-3">
      
                <div className="h-14 px-4 bg-zinc-950 border:bg-zinc-800 rounded-lg flex items-center gap-2">
                  <Tag className="text-zinc-400 size-5" />
                  <input
                    name="title"
                    placeholder="What is the activity?"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>

      
                <div className="h-14 flex-1 px-4 bg-zinc-950 border:bg-zinc-800 rounded-lg flex items-center gap-2">
                  <Calendar className="text-zinc-400 size-5" />
                  <input
                    type="datetime-local"
                    name="occurs_at"
                    placeholder="Date and time of the activity"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                </div>

                  
                <button type="submit" className=" bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400">
                Save activity
                </button>
              </form>            
            </div>      
          </div>
>>>>>>> 80630ff (add componente next page)
      )}

    </div>
  )
}