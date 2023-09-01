import { useState } from 'react'

export default function Newsletter () {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubscribe = async () => {
    const apiKey = import.meta.env.PUBLIC_BREVO_API_KEY
    const url = `https://api.brevo.com/v3/contacts`
    const headers = {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey
    }

    const data = {
      email: email
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubscribed(true)
      } else {
        // Handle error
        console.error('Subscription failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="mx-auto mt-6 bg-[#033277] px-5 py-10 text-white md:px-10">
      <div ClassName="flex flex-col gap-6 md:flex-row xl:justify-center">
        <div>
          <h2 ClassName="text-4xl font-bold dark:text-white">
            Bleiben Sie Informiert!
          </h2>
        </div>
        {subscribed ? (
          <p className="mb-4 text-green-500">Thank you for subscribing!</p>
        ) : (
          <div ClassName="flex flex-col leading-7 md:w-4/5 xl:w-7/12">
            <div>
              <p>
                Wir informieren Sie über unsere laufenden Projekte, wie ihre
                Spenden vor Ort Gutes tun und senden ihnen Einladungen zu
                unseren Veranstaltungen.
              </p>
            </div>

            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                aria-placeholder="Email"
                required
                minLength="5"
                maxLength="50"
                className="min-w-0 flex-auto border-0 bg-white px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                onChange={handleEmailChange}
              />
              <button
                className="flex-none border-2 border-transparent bg-[#dfecf7] px-3.5 py-2.5 text-sm font-semibold text-[#2b2523] shadow-sm hover:border-2 hover:border-[#dfecf7] hover:bg-[#033277] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={handleSubscribe}>
                Absenden
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


