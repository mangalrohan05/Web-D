import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <Script id='sc'>
            {`alert("Welcome to contact Page")`}
        </Script>

      This is contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact",
  description: "List of Contact appear here",
};