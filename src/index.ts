import {configure} from './sdk';
import {mountTerminal} from './terminal-panel';
export function activate(sdk:any){configure(sdk);sdk.provide('terminal',{mount(...args:any[]){const before=new Set(document.querySelectorAll('*'));args[0]=sdk.api;const result=mountTerminal(...args);const added=[...document.querySelectorAll('*')].filter(n=>!before.has(n));sdk.own(()=>{result.dispose?.();for(const n of added)if(n.isConnected)n.remove();});return result;}});}
