'use client';


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from '@headlessui/react';
import Section from '../Leaf/Section';
import Container from '../Leaf/Container';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Tooltip from '../../utils/SimpleTooltip';
import { SpecialMenu } from '../../components/MenuDrinks/Container/';


export default function Modale05 () {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
     

    }
  
    function scrollView() {
      const Modale05 = document.getElementById("Modale05");
      Modale05.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

     

    return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <div className="example-wrapper">
                      
             
             <div  onClick={(openModal)} className="group relative block">
         
             
  <img
    alt="biere"
    src="astra-remove.png"
    className="absolute inset-0 h-full w-full object-contain opacity-75 transition-opacity group-hover:opacity-50 lg:mt-20"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-yellow-600 lg:text-6xl">
      drinks
    </p>

    <p className="text-centertext-xl font-bold text-white sm:text-3xl lg:text-6xl">Biere</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="bg-yellow-600 rounded-2xl text-xl text-center text-white">
          click mich!!!
        </p>
      </div>
    </div>
  </div>
</div>

            
            </div>
        </div>
  
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-slate-800/75" />
            </Transition.Child>
  
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
        <Dialog.Panel className="border-yellow-600 w-full max-w-6xl transform overflow-hidden rounded-2xl border-8 bg-[#0C0C0C] p-2 text-left align-middle shadow-xl transition-all">

            <Section id="Modale05" >
      <Container>
        <div className='11/12 flex flex-col items-center justify-center'>
        
       
        <SpecialMenu/>
        </div>
         
      </Container>
      
    </Section>
                    
  
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        zurück
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }