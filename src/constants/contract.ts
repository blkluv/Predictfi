import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

export const contractAddress = "0x69dd1ea80E001D7325cb967447cD44e46E9Bd9A5";
export const tokenAddress = "0xC7EB879dAD627cAc773d9502a80938ca3b89e90e";

export const contract = getContract({
    client: client,
    chain: sepolia,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: sepolia,
    address: tokenAddress
});