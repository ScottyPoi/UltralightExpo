import { Block } from "@ethereumjs/block";
import { createContext } from "react";

export const BlockContext = createContext(Block.prototype)