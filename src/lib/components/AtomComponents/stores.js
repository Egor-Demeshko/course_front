import { writable } from "svelte/store";
import { MODAL_TYPES_CONTACTS } from "./modalConst";

export const modalState = writable({ type: MODAL_TYPES_CONTACTS, show: false });
