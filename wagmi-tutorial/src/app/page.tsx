import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import { MintNFT } from '../components/MintNFT'
import { NameNFT } from '../components/NameNFT'
import { NetworkSwitcher } from '../components/NetworkSwitcher'

export function Page() {
  return (
    <>
      <h1>Hello World</h1>

      <Connect />

      <Connected>
        <Account />
        <hr />
        <NameNFT />
        <hr />
        <MintNFT />
        <hr />
        <NetworkSwitcher />
      </Connected>
    </>
  )
}

export default Page
