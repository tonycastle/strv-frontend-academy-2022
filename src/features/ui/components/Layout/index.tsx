import { Header } from '../Header'

//@ts-ignore
export const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
