'use client'
import { useContractRead } from 'wagmi'
import { wagmiMintExampleABI } from '../generated'

export function NameNFT() {
  const {data:Name} = useContractRead({
    address:"0xfba3912ca04dd458c843e2ee08967fc04f3579c2",
    abi:wagmiMintExampleABI,
    functionName:"name",
    watch: false
  });

  return (
    <div>
      {Name}
    </div>
  )
}
