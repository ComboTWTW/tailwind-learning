import React from 'react'
import {NumberedList} from '../constants/index'

function Features() {
  return (
    <section id="features">
          <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
            {/* What's different item*/}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
              </h2>
              <p className="max-w-sm font-semibold text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our software is tilormade for modern digital product teams.
              </p>
            </div>
            {/* Numbered List */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              {/* List item 1 */}
              {NumberedList.map((item) => { 
                return (
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Header */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full font-bold bg-brightRed md:py-1">
                      {item.id}
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">{item.title}</h3>
                  </div>
                </div>
                <div className="">
                  <h3 className="hidden mb-4 font-bold text-lg md:block">Everything you need in one place</h3>
                  <p className="text-darkGrayishBlue font-medium">{item.text}
                  </p>
                </div>
              </div>)
              })
              }
            </div>
          </div>
        </section>
  )
}

export default Features