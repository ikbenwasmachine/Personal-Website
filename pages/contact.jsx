import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import React from 'react';


export default function Home() {
  const { data: _parts } = swr('/api/parts');
  const parts = _parts ? _parts : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Neem Contact Op</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Andere adressen waar u contact met mij kunt opnemen.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-md w-full">
                <a href="mailto:max.van.pelt@bartosz.nl">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-2 py-1 rounded-lg items-center" style={{ border: '1px solid black' }}>
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl" style={{ wordWrap: 'break-word', fontSize: '1rem' }}>max.van.pelt@bartosz.nl</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://nl.linkedin.com/in/max-van-pelt-3975aa240&ved=2ahUKEwj579H429CPAxXw2AIHHYetHuMQFnoECBsQAQ&usg=AOvVaw0CDyyJO66g4N8a89UhWciF">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center" style={{ border: '1px solid black' }}>
                        <i className="fab fa-linkedin fa-2x" />
                        <p className="font-semibold text-xl" style={{ wordWrap: 'break-word' }}>Max van Pelt</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://www.bartosz.nl">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center" style={{ border: '1px solid black' }}>
                        <i className="fa fa-globe fa-2x" />
                        <p className="font-semibold text-xl" style={{ wordWrap: 'break-word' }}>Bartosz</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
