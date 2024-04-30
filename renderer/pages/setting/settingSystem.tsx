import Divider from "./components/divider"

export default function SettingSystem() {
  return (
    <div>
      {`Data Server`}: input
      <Divider />
      {`Sync Server(optional)`}: boolean
      {`Address`}: input
      <Divider />
      {`Action key`}: input
      <Divider />
      {`Launch When Startup`}: boolean
      <Divider />
      {`When Click Close`}: boolean
    </div>
  )
}