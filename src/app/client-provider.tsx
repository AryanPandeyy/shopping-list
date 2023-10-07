"use client";
import { AppType } from 'next/app';
import { trpc } from '../../utils/trpc';


const myApp: AppType = () => {
  <trpc.Provider>
    </trpc.Provider>
};
