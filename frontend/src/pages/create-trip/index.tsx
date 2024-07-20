import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User } from "lucide-react"
import { FormEvent, useState } from "react"

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'lucina@bol.com',
    'na@bol.com'
  ])
  const [message, setMessage] = useState('')


  //open next function
  function openGestsInput() {
    setIsGuestsInputOpen(true)
  }

  //faz ao contrario da acima
  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }


  //function ConfirmTripModal
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }
  //function ConfirmTripModal
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }


  //function Modal
  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  //faz ao contrario da acima
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    //if email exist
    if (emailsToInvite.includes(email)) {
      setMessage('Email exist the list')
      event.currentTarget.reset()
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])
    setMessage('Email add whith success...')
    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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
              <button onClick={closeGuestsInput} className=" bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Alter Local/Date
                <Settings2 className="size-5" />
              </button>
            ) : (

              <button onClick={openGestsInput} className=" bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Continue
                < ArrowRight className=" size-5 text-lime-950" />
              </button>
            )}
          </div>


          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
              <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 text-left">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {
                  emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1">
                      {emailsToInvite.length} person(s) invited
                    </span>
                  ) : (
                    <span className="text-zinc-400 text-lg flex-1">Who will be on the trip?</span>
                  )
                }

              </button>


              <div className="w-px h-6 bg-zinc-800" />

              <button onClick={openConfirmTripModal} className=" bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm Trip
                < ArrowRight className=" size-5 text-lime-950" />
              </button>
            </div>
          )}

        </div>


        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#"> termos de uso </a> e <a className="text-zinc-300 underline" href="#"> políticas de privacidade. </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-x-2">
              <div className=" flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select Guests</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className=" text-sm text-zinc-400">Guests will receive emails to confirm their participation in the trip....📩📩</p>
            </div>

            <div className="flex flex-wrap gap-2 ">
              {emailsToInvite.map(email => {
                return (
                  <div key={email} className=" py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                    <span className="text-zinc-300">{email}</span>
                    <button type="button" onClick={() => removeEmailFromInvites(email)}>
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>

                )
              })}

            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border:bg-zinc-800 rounded-lg flex items-center gap-2">

              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter the guest's e-mail address ✒...."
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

              <button type="submit" className=" bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Invite
                < Plus className=" size-5" />
              </button>
            </form>

            {message && (
              <p className="text-red-600">{message}</p>
            )}
          </div>

        </div>

      )}



      {isConfirmTripModalOpen && (


        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-x-2">
              <div className=" flex items-center justify-between">
                <h2 className="text-lg font-semibold">Confirm trip creation</h2>
                <button type="button" onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className=" text-sm text-zinc-400">To complete your trip to <span className="font-semibold text-zinc-400">Florianópolis, Brazil </span> from
                <span className="font-semibold text-zinc-400"> August 16 to 27, 2024,  </span> please fill in your details below:  </p>
            </div>

            <form onSubmit={addNewEmailToInvite} className=" space-y-3">

              <div className="h-14 px-4 bg-zinc-950 border:bg-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <input
                  name="name"
                  placeholder="Your full name"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border:bg-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your personal e-mail"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
              </div>

              <button type="submit" className=" bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip creation
              </button>
            </form>

            {message && (
              <p className="text-red-600">{message}</p>
            )}
          </div>

        </div>

      )}


    </div>

  )
}

