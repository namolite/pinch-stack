/**
 *  Jotai Global States Manager
 *  @param: Default State
 */

import { atom } from 'jotai';

export const selectedTabAtom = atom<string>('home')

export const sidelistBarAtom = atom<string>('All')

export const settingAtom = atom<string>('info')

export const authAtom = atom<string>('login')
