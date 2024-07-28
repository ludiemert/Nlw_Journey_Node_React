import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDateStep } from "../steps/destination-and-date-step"
import { InviteGuestsStep } from "../steps/invite-guests-step"


export function CreateTripPage() {
  const navigate = useNavigate()


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

  //faz ao contrario da acima = close botao fechar
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

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat">

      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Invite your friends and plan your next trip!😎😎😊😉
          </p>
        </div>

        <div className="space-y-4">

          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGestsInput={openGestsInput}

          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              //passar as variaveis
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />

          )}

        </div>


        <p className="text-sm text-zinc-500">
          When planning your plann.er you automatically agree <br />
          with our <a className="text-zinc-300 underline" href="#"> terms of use </a> e <a className="text-zinc-300 underline" href="#"> privacy policies!😉🥰 </a>
        </p>


        {message && (
          <div className="text-red-500 mt-2">
            {message}
          </div>
        )}


      </div>

      {isGuestsModalOpen && (
        //ele tem as propriedades do props => emailsToInvite, ....
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}


    </div>

  )
}

