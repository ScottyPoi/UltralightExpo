import { Block } from "@ethereumjs/block";
import { Transaction } from "@ethereumjs/tx";
import { useContext } from "react";
import { BlockContext } from "../hooks/useBlock";

export default function ReceiptsTab() {
    const block = useContext(BlockContext)
    const receipts = block.header.receiptTrie
}