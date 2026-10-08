import React from 'react'

function Card({message,btnText="visit me cutie"}) {
    console.log(message);
    
  return (
    // <div>
    // Card
    // </div>
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mb-4">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src="https://imgs.search.brave.com/k-T5ebQ6-YDM_v9iR1BTYCfp1wrwJTU99P28FUX1a8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9oYXBweS1kb2ct/aW4tZ2hvc3QtaGFs/bG93ZWVuLWNvc3R1/bWUtZnJlZS1pbWFn/ZS5qcGc_dz02MDAm/cXVhbGl0eT04MA"
        alt="Modern building architecture"
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{message}</div>
      <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p className="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
      <button>{btnText}</button>
    </div>
  </div>
</div>
    
  )
}

export default Card
